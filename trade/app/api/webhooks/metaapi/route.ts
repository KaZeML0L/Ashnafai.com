import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

// MetaApi sends webhooks when trades open/close
export async function POST(req: NextRequest) {
  try {
    const secret = req.headers.get("x-webhook-secret");
    if (secret !== process.env.METAAPI_WEBHOOK_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { type, trade } = body; // type: "TRADE_OPENED" | "TRADE_CLOSED" | "TRADE_UPDATED"

    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ error: "not configured" }, { status: 503 });

    if (type === "TRADE_OPENED") {
      await supabase.from("trades").upsert({
        id:           trade.id,
        pair:         trade.symbol,
        direction:    trade.type === "ORDER_TYPE_BUY" ? "BUY" : "SELL",
        entry_price:  trade.openPrice,
        stop_loss:    trade.stopLoss ?? null,
        take_profit:  trade.takeProfit ?? null,
        lots:         trade.volume,
        status:       "open",
        profit_pips:  null,
        opened_at:    trade.openTime,
        closed_at:    null,
      });

      // Alert both Telegram channels
      await sendTelegramAlerts(trade, "opened");
    }

    if (type === "TRADE_CLOSED") {
      await supabase.from("trades").update({
        status:      "closed",
        profit_pips: trade.profitPips ?? null,
        profit_usd:  trade.profit ?? null,
        closed_at:   trade.closeTime,
      }).eq("id", trade.id);

      await sendTelegramAlerts(trade, "closed");
    }

    if (type === "TRADE_UPDATED") {
      await supabase.from("trades").update({
        current_price: trade.currentPrice,
        profit_usd:    trade.profit ?? null,
        profit_pips:   trade.profitPips ?? null,
      }).eq("id", trade.id);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "webhook failed" }, { status: 500 });
  }
}

async function sendTelegramAlerts(trade: Record<string, unknown>, action: "opened" | "closed") {
  const botToken    = process.env.TELEGRAM_BOT_TOKEN;
  const freeChan    = process.env.TELEGRAM_FREE_CHANNEL_ID;    // @ashnafaiTrade
  const premChan    = process.env.TELEGRAM_PREMIUM_CHANNEL_ID; // @ashnafaiPremium

  if (!botToken) return;

  const id       = trade.id as string;
  const symbol   = trade.symbol as string;
  const dir      = (trade.type as string) === "ORDER_TYPE_BUY" ? "BUY" : "SELL";
  const tradeUrl = `https://trade.ashnafai.com/trades/${id}`;

  // Free channel — teaser only
  if (freeChan) {
    const freeMsg = action === "opened"
      ? `🔔 *New Signal — ${symbol}*\n\nDirection locked 🔒\n\n[View trade →](${tradeUrl})`
      : `🔒 *Signal Closed — ${symbol}*\n\n[View result →](${tradeUrl})`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: freeChan, text: freeMsg, parse_mode: "Markdown", disable_web_page_preview: false }),
    });
  }

  // Premium channel — full details
  if (premChan) {
    const premMsg = action === "opened"
      ? `⚡ *NEW SIGNAL — ${symbol} ${dir}*\n\n` +
        `Entry:  \`${trade.openPrice}\`\n` +
        `SL:     \`${trade.stopLoss ?? "—"}\`\n` +
        `TP:     \`${trade.takeProfit ?? "—"}\`\n` +
        `Lots:   \`${trade.volume}\`\n\n` +
        `[View live →](${tradeUrl})`
      : `✅ *CLOSED — ${symbol} ${dir}*\n\n` +
        `P&L: \`${trade.profit ?? "—"} USD\`\n` +
        `Pips: \`${trade.profitPips ?? "—"}\`\n\n` +
        `[View result →](${tradeUrl})`;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: premChan, text: premMsg, parse_mode: "Markdown", disable_web_page_preview: false }),
    });
  }
}
