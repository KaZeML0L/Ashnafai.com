import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) return NextResponse.json({ equity: [] });
    // In production, this would pull from MetaApi equity snapshot table
    const { data } = await supabase
      .from("equity_snapshots")
      .select("date,value")
      .order("date", { ascending: true })
      .limit(90);

    return NextResponse.json({ equity: data ?? [] });
  } catch {
    return NextResponse.json({ equity: [] });
  }
}
