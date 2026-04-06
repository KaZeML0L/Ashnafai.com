import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

const NOWPAYMENTS_API = "https://api.nowpayments.io/v1";

export async function POST(req: NextRequest) {
  try {
    const body   = await req.formData();
    const email    = body.get("email")    as string;
    const telegram = body.get("telegram") as string;

    if (!email) {
      return NextResponse.redirect(new URL("/premium?error=missing_email", req.url));
    }

    const apiKey = process.env.NOWPAYMENTS_API_KEY;
    if (!apiKey) throw new Error("Missing NOWPAYMENTS_API_KEY");

    // Create invoice via NOWPayments
    const res = await fetch(`${NOWPAYMENTS_API}/invoice`, {
      method: "POST",
      headers: { "x-api-key": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        price_amount:     49,
        price_currency:   "usd",
        pay_currency:     "usdttrc20",
        order_id:         `ashnafai_${Date.now()}`,
        order_description: "Ashnafai Trade Premium — 1 Month",
        ipn_callback_url:  `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhooks/crypto`,
        success_url:       `${process.env.NEXT_PUBLIC_SITE_URL}/premium/success`,
        cancel_url:        `${process.env.NEXT_PUBLIC_SITE_URL}/premium`,
      }),
    });

    if (!res.ok) throw new Error("NOWPayments error");
    const invoice = await res.json();

    // Store pending subscriber
    const supabase = getSupabaseAdmin();
    if (supabase) await supabase.from("subscribers").insert({
      email,
      telegram_id: telegram || null,
      plan:        "free",
      payment_id:  invoice.id,
    });

    // Redirect to NOWPayments hosted checkout
    return NextResponse.redirect(invoice.invoice_url);
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL("/premium?error=payment_failed", req.url));
  }
}
