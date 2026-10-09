"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
const listings = [
  { name: "Listing details being verified", type: "Personal loan app", lender: "Lender partner to be verified", amount: "Not published", tenure: "Not published", status: "Not yet verified", description: "This directory will publish a profile only after the actual lending entity, official app link and key loan terms have been checked." }
];
export default function LoanApps() {
 const [query,setQuery]=useState(""); const [type,setType]=useState("All categories");
 const shown=useMemo(()=>listings.filter(x=>(x.name+" "+x.type+" "+x.lender).toLowerCase().includes(query.toLowerCase())&&(type==="All categories"||x.type===type)),[query,type]);
 return <><section className="page-hero"><div className="container"><div className="eyebrow">The directory</div><h1>Research loan apps<br/>before you apply.</h1><p>Compare digital lending platforms with the details that matter: the actual lender, borrowing costs, eligibility, repayment terms and official application links.</p></div></section>
 <section className="section"><div className="container"><div className="disclosure"><strong>Verification in progress.</strong> We are building this directory carefully. No app will be described as verified or RBI-approved without reliable supporting evidence. Check the RBI's official website and the lender's own disclosures before applying.</div>
 <div style={{marginTop:28}} className="directory-toolbar"><label className="search-field"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search app or lending partner" aria-label="Search loan apps"/></label><select className="filter-select" value={type} onChange={e=>setType(e.target.value)} aria-label="Filter category"><option>All categories</option><option>Personal loan app</option></select></div>
 {shown.length?shown.map(x=><article className="directory-card" key={x.name}><div><span className="status-pill">{x.status}</span><h3>{x.name}</h3><p>{x.description}</p><div className="directory-meta"><span>Category: <strong>{x.type}</strong></span><span>Lender: <strong>{x.lender}</strong></span><span>Loan amount: <strong>{x.amount}</strong></span><span>Tenure: <strong>{x.tenure}</strong></span></div></div><div><Link className="button-secondary" href="/how-we-review">Our checks <ArrowUpRight size={14}/></Link></div></article>):<div className="empty-state">No matches. Try another search.</div>}
 <p className="small-note">Directory entries are being researched. This page does not currently recommend a specific loan app. We will add lender profiles as their details are verified.</p>
 </div></section></>;
}