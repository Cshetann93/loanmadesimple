"use client";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, Calculator, CheckCircle2, ClipboardCheck, FileSearch, HandCoins, ShieldCheck, Smartphone, WalletCards } from "lucide-react";

const categories = [
  { icon: Smartphone, title: "Loan app directory", desc: "Explore digital lending apps and find the lender behind each platform.", href: "/loan-apps", link: "Browse loan apps" },
  { icon: HandCoins, title: "Short-term borrowing", desc: "Understand shorter repayment options, costs and the risks to check first.", href: "/short-term-loans", link: "Explore short-term loans" },
  { icon: Calculator, title: "Loan calculator", desc: "Estimate monthly payments and total interest before making a decision.", href: "/loan-calculator", link: "Calculate repayments" },
];
export default function Home() {
  return <>
    <section className="hero"><div className="container hero-grid"><div>
      <div className="eyebrow">Borrow with more clarity</div>
      <h1>Find your options.<br/><em>Know the details.</em></h1>
      <p className="hero-copy">A clearer way to research digital loan apps and lending platforms in India. Understand who lends, what it costs and what to check before you apply.</p>
      <div className="hero-actions"><Link className="button-primary" href="/loan-apps">Explore loan apps <ArrowUpRight size={16}/></Link><Link className="button-secondary" href="/loan-calculator">Calculate a loan <Calculator size={15}/></Link></div>
      <div className="trust-line"><span><ShieldCheck size={14}/> Lender-first information</span><span><ClipboardCheck size={14}/> Clear cost checks</span><span><FileSearch size={14}/> Research-led guides</span></div>
    </div><div className="hero-art" aria-label="Illustration of a loan comparison summary"><div className="art-grid"/><div className="float-tag tag-one"><BadgeCheck size={16}/> Lender details matter</div><div className="summary-card"><div className="summary-top"><span>YOUR BORROWING CHECKLIST</span><span className="round-icon"><WalletCards size={19}/></span></div><h3>Compare the full picture.</h3><p>Look beyond the amount offered.</p><div className="mini-row"><span>Actual lender</span><strong>Verify first</strong></div><div className="mini-row"><span>APR & fees</span><strong>Understand costs</strong></div><div className="mini-row"><span>Repayment terms</span><strong>Check the dates</strong></div><div className="summary-foot"><ShieldCheck size={14}/> Never borrow without reviewing the terms.</div></div><div className="float-tag tag-two"><CheckCircle2 size={16}/> Informed decisions start here</div></div></div></section>
    <section className="section section-white"><div className="container"><div className="section-head"><div><div className="eyebrow">Explore the essentials</div><h2>Start with what you need</h2><p>Practical tools and research to help you understand your options before you apply.</p></div><Link className="text-link" href="/how-we-review">How we review information <ArrowRight size={15}/></Link></div>
      <div className="category-grid">{categories.map(({icon:Icon,title,desc,href,link})=><Link className="category-card" href={href} key={title}><div className="category-icon"><Icon size={21}/></div><h3>{title}</h3><p>{desc}</p><span className="text-link">{link} <ArrowRight size={14}/></span></Link>)}</div>
    </div></section>
    <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">A smarter checklist</div><h2>Three things to check every time</h2><p>Approval speed and advertised amounts are only part of the story.</p></div></div><div className="steps-grid">
      <div className="step"><div className="step-number">01 / LENDER</div><h3>Find out who actually lends</h3><p>An app may be a service provider rather than the lender. Identify the bank or NBFC named in the loan documents and verify the relationship.</p></div>
      <div className="step"><div className="step-number">02 / COST</div><h3>Read the complete cost</h3><p>Review the annual percentage rate, interest, processing fee, taxes, late charges and the total amount you will repay.</p></div>
      <div className="step"><div className="step-number">03 / TERMS</div><h3>Make sure repayment works</h3><p>Check the due dates, tenure, cooling-off terms and what happens if a payment is missed. Borrow only what you can repay.</p></div>
    </div></div></section>
    <section className="section section-white"><div className="container"><div className="callout"><div><h2>Know the numbers before you commit.</h2><p>Use the calculator to estimate monthly repayments. Actual lender terms and charges may differ.</p></div><Link className="button-lime" href="/loan-calculator">Try the loan calculator <ArrowRight size={15}/></Link></div></div></section>
    <section className="section"><div className="container"><div className="disclosure"><strong>Our approach:</strong> LoanMadeSimple is an independent information directory, not a bank, NBFC, lender or loan approval service. Listings and product terms must be verified with the lender. A listing does not mean RBI endorsement or a guarantee of safety, approval or suitability.</div></div></section>
  </>;
}