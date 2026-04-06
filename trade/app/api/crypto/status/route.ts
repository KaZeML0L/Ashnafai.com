import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const paymentId = req.nextUrl.searchParams.get("id");
  if (!paymentId) return NextResponse.json({ status: "unknown" });

  const apiKey = process.env.NOWPAYMENTS_API_KEY ?? "";
  const res = await fetch(`https://api.nowpayments.io/v1/payment/${paymentId}`, {
    headers: { "x-api-key": apiKey },
  });
  const data = await res.json();
  return NextResponse.json({ status: data.payment_status, data });
}
