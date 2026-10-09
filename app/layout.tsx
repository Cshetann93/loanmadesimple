import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://loanmadesimple.in"),
  title: { default: "LoanMadeSimple — Understand your loan options", template: "%s | LoanMadeSimple" },
  description: "Research digital loan apps and lending platforms in India. Understand lender details, costs, eligibility and repayment before you apply.",
  openGraph: { title: "LoanMadeSimple", description: "Clear information for more informed borrowing.", url: "https://loanmadesimple.in", siteName: "LoanMadeSimple", type: "website" },
  robots: { index: true, follow: true },
};
const links = [
  { href: "/loan-apps", label: "Loan apps" },
  { href: "/short-term-loans", label: "Short-term loans" },
  { href: "/loan-calculator", label: "Loan calculator" },
  { href: "/how-we-review", label: "How we review" },
];
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-IN"><body>
    <div className="notice"><ShieldCheck size={14} /> Independent loan research. Always verify terms with the lender.</div>
    <header className="site-header"><div className="nav-wrap">
      <Link className="brand" href="/" aria-label="LoanMadeSimple home"><span className="brand-mark">L<span>·</span></span><span>loan<span className="brand-light">made</span>simple<small>.in</small></span></Link>
      <nav aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
      <Link className="nav-cta" href="/loan-apps">Explore lenders <ArrowUpRight size={15}/></Link>
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="footer-main">
      <div className="footer-brand"><Link className="brand brand-footer" href="/"><span className="brand-mark">L<span>·</span></span><span>loan<span className="brand-light">made</span>simple<small>.in</small></span></Link><p>Clearer information for more informed borrowing decisions.</p></div>
      <div><h3>Explore</h3><Link href="/loan-apps">Loan app directory</Link><Link href="/short-term-loans">Short-term loans</Link><Link href="/loan-calculator">Loan calculator</Link></div>
      <div><h3>About</h3><Link href="/about">About us</Link><Link href="/how-we-review">Our review process</Link><Link href="/contact">Contact</Link></div>
      <div><h3>Policies</h3><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy policy</Link><Link href="/terms-and-conditions">Terms and conditions</Link></div>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} LoanMadeSimple.in</span><span>We are an information directory, not a lender.</span></div></footer>
  </body></html>;
}