import { Star } from "lucide-react";

export default function RatingBadge({ rating }) {
  const value = typeof rating === "number" && rating > 0 ? rating.toFixed(1) : "—";
  return (
    <span className="rating-badge">
      <Star size={12} fill="#E8C77E" strokeWidth={0} />
      {value}
    </span>
  );
}
