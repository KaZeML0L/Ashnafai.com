export type Direction = "BUY" | "SELL";
export type TradeStatus = "open" | "closed";

export interface Trade {
  id: string;
  pair: string;
  direction: Direction;
  entry_price: number;
  stop_loss: number | null;
  take_profit: number | null;
  current_price?: number;
  lots?: number;
  status: TradeStatus;
  profit_pips: number | null;
  profit_usd?: number | null;
  opened_at: string;
  closed_at: string | null;
}

export interface Subscriber {
  id: string;
  telegram_id: string | null;
  email: string | null;
  plan: "free" | "premium";
  expires_at: string | null;
  payment_id: string | null;
}

export interface EquityPoint {
  date: string;
  value: number;
}
