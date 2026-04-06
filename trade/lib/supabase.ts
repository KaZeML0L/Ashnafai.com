import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Use placeholders at build time — real values come from env at runtime
const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL       || "https://placeholder.supabase.co";
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY  || "placeholder_anon_key";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnon);

// Server-only admin client (service role) — lazy, returns null when not configured
export function getSupabaseAdmin(): SupabaseClient | null {
  const url        = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, { auth: { persistSession: false } });
}
