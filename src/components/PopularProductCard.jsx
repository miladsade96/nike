import { star } from "../assets/icons/index.js";

export default function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="size-[280px] rounded-3xl border-2 hover:border-coral-red transition-all duration-400"
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="Rating star" height={24} width={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-lg leading-normal">
        {price}
      </p>
    </div>
  );
}
