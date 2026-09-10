export default function Sprockets({ className = "" }) {
  return (
    <div className={`sprockets ${className}`} aria-hidden="true">
      {Array.from({ length: 28 }).map((_, i) => (
        <span key={i} className="sprocket-dot" />
      ))}
    </div>
  );
}
