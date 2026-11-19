import { useState } from "react";
import Button from "../components/Button.jsx";
export default function Subscribe() {
 const [message, setMessage] = useState("");
 function handleSubmit(event) {
   if (import.meta.env.DEV) { event.preventDefault(); setMessage("This preview does not send your email. Signup is available on the published site."); }
 }
 return <section id="subscribe" className="max-container flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between" aria-labelledby="subscribe-title"><div><h2 id="subscribe-title" className="font-palanquin text-4xl font-bold">Stay in the <span className="text-coral-red">loop.</span></h2><p className="info-text mt-4">Leave your email for collection updates.</p></div><form name="collection-updates" method="POST" action="/thanks.html" data-netlify="true" data-netlify-honeypot="company" onSubmit={handleSubmit} className="w-full lg:max-w-lg"><input type="hidden" name="form-name" value="collection-updates" /><div hidden><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div><label htmlFor="newsletter-email" className="block font-montserrat mb-3">Email address</label><div className="flex flex-col sm:flex-row gap-3"><input id="newsletter-email" type="email" name="email" required autoComplete="email" maxLength={254} placeholder="you@example.com" className="min-w-0 flex-1 rounded-full border border-slate-gray px-5 py-4 font-montserrat" /><Button label="Sign up" type="submit" /></div>{message && <p role="status" className="mt-4 font-montserrat text-slate-gray">{message}</p>}</form></section>;
}
