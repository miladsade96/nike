export default function ShoeCard({ imgUrl, bigShoeImage, changeBigShoeImage, index }) {
  const selected = bigShoeImage === imgUrl.bigShoe;
  return <button type="button" aria-label={`View shoe style ${index + 1}`} aria-pressed={selected} onClick={() => changeBigShoeImage(imgUrl.bigShoe)}
    className={`border-2 rounded-xl ${selected ? "border-coral-red" : "border-transparent"} flex-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`}>
    <span className="flex justify-center items-center bg-card bg-center bg-cover sm:size-36 rounded-xl p-3"><img src={imgUrl.thumbnail} alt="" width={127} height={103} className="object-contain w-full" /></span>
  </button>;
}
