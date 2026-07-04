// Official Lavert logo (mark + wordmark). White for dark backgrounds, purple for light.
export default function Logo({ variant = "purple", onClick, className = "" }) {
  const src =
    variant === "white"
      ? "/assets/brand/logo-white.svg"
      : "/assets/brand/logo-purple.svg";
  return (
    <a
      href="#home"
      className={`logo ${className}`}
      onClick={onClick}
      aria-label="Lavert — home"
    >
      <img src={src} alt="Lavert" className="logo-img" width="80" height="46" />
    </a>
  );
}
