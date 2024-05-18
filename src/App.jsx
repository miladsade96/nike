import {
  Hero,
  PopularProducts,
  Footer,
  Subscribe,
  Services,
  SuperQuality,
  SpecialOffer,
  CustomerReviews,
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="ml-24 xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8 text-white">
        <Footer />
      </section>
    </main>
  );
}
