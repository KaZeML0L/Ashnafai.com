import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ trades: [] });
    const { data, error } = await supabase
      .from("trades")
      .select("id,pair,direction,entry_price,current_price,lots,status,profit_pips,profit_usd,opened_at,closed_at")
      .eq("status", "open")
      .order("opened_at", { ascending: false })
      .limit(20);

    if (error) throw error;
    return NextResponse.json({ trades: data ?? [] });
  } catch (err) {
    return NextResponse.json({ trades: [], error: "Failed to fetch" }, { status: 500 });
  }
}
