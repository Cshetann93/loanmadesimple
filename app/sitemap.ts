import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 const base = "https://loanmadesimple.in";
 const paths = ["", "/loan-apps", "/short-term-loans", "/loan-calculator", "/how-we-review", "/about", "/contact", "/privacy-policy", "/disclaimer"];
 return paths.map(path => ({ url: base + path, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/loan-apps" ? 0.9 : 0.6 }));
}