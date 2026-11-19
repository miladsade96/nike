import { offer } from "../assets/images/index.js";
import Button from "../components/Button.jsx";
export default function SpecialOffer() {
 return <section className="flex flex-col lg:flex-row items-center gap-12 max-container"><img src={offer} alt="A selection of sneakers and activewear" width={640} height={560} loading="lazy" className="w-full lg:w-1/2 object-contain" /><div className="flex-1"><h2 className="font-palanquin text-4xl font-bold"><span className="text-coral-red">Fresh styles.</span> More possibilities.</h2><p className="info-text mt-6">Find a new everyday favourite in the collection. Explore our featured silhouettes and choose the style that works for you.</p><div className="mt-8"><Button label="Explore the collection" href="#products" /></div></div></section>;
}
