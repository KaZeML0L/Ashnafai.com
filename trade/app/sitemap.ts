import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

function tradeUrl(trade: { pair: string; opened_at: string; id: string }) {
  const d = new Date(trade.opened_at);
  const date = d.toISOString().slice(0, 10).replace(/-/g, "");
  const time = d.toISOString().slice(11, 16).replace(":", "");
  return `${trade.pair}_${date}_${time}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://trade.ashnafai.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "always", priority: 1.0 },
    { url: `${base}/premium`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  try {
    const url  = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
    const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
    if (!url || !anon) return staticPages;

    const supabase = createClient(url, anon);
    const { data } = await supabase.from("trades").select("id,pair,opened_at").order("opened_at", { ascending: false }).limit(500);

    const tradePages: MetadataRoute.Sitemap = (data ?? []).map((t: { id: string; pair: string; opened_at: string }) => ({
      url: `${base}/trades/${tradeUrl(t)}`,
      lastModified: new Date(t.opened_at),
      changeFrequency: "hourly" as const,
      priority: 0.7,
    }));

    return [...staticPages, ...tradePages];
  } catch {
    return staticPages;
  }
}
