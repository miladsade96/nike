import { useEffect, useRef, useState } from "react";
import { headerLogo } from "../assets/images/index.js";
import { navLinks } from "../constants/index.js";
import { hamburger } from "../assets/icons/index.js";
export default function Nav() {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const key = (event) => { if (event.key === "Escape") setOpen(false); };
    const outside = (event) => { if (!header.current?.contains(event.target)) setOpen(false); };
    document.addEventListener("keydown", key); document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("pointerdown", outside); };
  }, []);
  return <header ref={header} className="padding-x py-6 absolute z-20 w-full bg-white/95">
    <nav aria-label="Main navigation" className="flex justify-between items-center max-container gap-6">
      <a href="#home" aria-label="Nike concept home"><img src={headerLogo} alt="Nike" width={130} height={29} /></a>
      <ul className="hidden lg:flex flex-1 justify-end items-center gap-12">{navLinks.map((item) => <li key={item.label}><a className="font-montserrat text-lg text-slate-gray hover:text-coral-red" href={item.href}>{item.label}</a></li>)}</ul>
      <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="lg:hidden rounded p-2"><img src={hamburger} alt="" width={25} height={25} /></button>
    </nav>
    {open && <ul id="mobile-navigation" className="lg:hidden max-container bg-white py-5 grid gap-4 font-montserrat">{navLinks.map((item) => <li key={item.label}><a className="block rounded py-2 text-lg text-slate-gray" href={item.href} onClick={() => setOpen(false)}>{item.label}</a></li>)}</ul>}
  </header>;
}
