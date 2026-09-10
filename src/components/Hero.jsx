import { Play } from "lucide-react";
import { backdropUrl } from "../api/tmdb.js";
import RatingBadge from "./RatingBadge.jsx";
import Sprockets from "./Sprockets.jsx";

export default function Hero({ movie, onOpen }) {
  if (!movie) return null;

  const backdrop = backdropUrl(movie.backdrop_path || movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <section
      className="hero"
      style={
        backdrop
          ? { backgroundImage: `linear-gradient(115deg, rgba(13,9,6,0.6), #0D0906 78%), url(${backdrop})` }
          : undefined
      }
    >
      <Sprockets className="hero__sprockets" />
      <div className="hero__content">
        <p className="hero__eyebrow">Trending this week</p>
        <h1>{movie.title}</h1>
        <div className="hero__meta">
          <RatingBadge rating={movie.vote_average} />
          <span>{year}</span>
        </div>
        <p className="hero__overview">{movie.overview}</p>
        <button className="btn btn--primary" onClick={() => onOpen(movie)}>
          <Play size={14} fill="#F3E9E0" /> View details
        </button>
      </div>
    </section>
  );
}
