export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number, pair: string): string {
  if (pair.includes("JPY") || pair.includes("US30") || pair.includes("NAS") || pair.includes("BTC") || pair.includes("XAU")) {
    return price.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 2 });
  }
  return price.toFixed(5);
}

export function formatDuration(openedAt: string): string {
  const diff = Date.now() - new Date(openedAt).getTime();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}h ${m}m`;
}

export function tradeSlug(trade: { pair: string; opened_at: string; id: string }): string {
  const d = new Date(trade.opened_at);
  const date = d.toISOString().slice(0, 10).replace(/-/g, "");
  const time = d.toISOString().slice(11, 16).replace(":", "");
  return `${trade.pair}_${date}_${time}`;
}
