export default function Button({ label, href, type = "button", onClick, disabled, className = "" }) {
  const classes = `inline-flex justify-center items-center px-7 py-4 border font-montserrat text-lg leading-normal bg-coral-red rounded-full text-white border-coral-red transition hover:bg-[#d74232] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${className}`;
  return href ? <a className={classes} href={href}>{label}</a> : <button className={classes} type={type} onClick={onClick} disabled={disabled}>{label}</button>;
}
