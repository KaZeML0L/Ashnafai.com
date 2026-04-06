import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/api/webhooks/"],
      },
    ],
    sitemap: "https://trade.ashnafai.com/sitemap.xml",
  };
}
