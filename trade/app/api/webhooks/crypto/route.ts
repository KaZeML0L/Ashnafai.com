import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { payment_id, payment_status, order_id } = body;

    if (payment_status !== "finished" && payment_status !== "confirmed") {
      return NextResponse.json({ ok: true });
    }

    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ error: "not configured" }, { status: 503 });

    // Activate subscription — expires 31 days from now
    const expiresAt = new Date(Date.now() + 31 * 24 * 60 * 60 * 1000).toISOString();
    const { data: sub } = await supabase
      .from("subscribers")
      .update({ plan: "premium", expires_at: expiresAt })
      .eq("payment_id", payment_id)
      .select()
      .single();

    if (sub?.telegram_id) {
      // Send Telegram welcome message
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      if (botToken) {
        const chatId = sub.telegram_id.replace("@", "");
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: `✅ *Premium activated!*\n\nWelcome to Ashnafai Trade Premium.\n\nYou'll now receive instant alerts the moment we open or close a trade.\n\nView all live trades: https://trade.ashnafai.com`,
            parse_mode: "Markdown",
          }),
        });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "webhook failed" }, { status: 500 });
  }
}
