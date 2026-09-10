import { posterUrl } from "../api/tmdb.js";
import RatingBadge from "./RatingBadge.jsx";

export default function MovieCard({ movie, onOpen }) {
  const poster = posterUrl(movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <button className="movie-card" onClick={() => onOpen(movie)}>
      <div className="movie-card__poster">
        {poster ? (
          <img src={poster} alt={movie.title} loading="lazy" />
        ) : (
          <div className="movie-card__fallback">
            <span>{movie.title?.[0] ?? "?"}</span>
          </div>
        )}
        <div className="movie-card__badge">
          <RatingBadge rating={movie.vote_average} />
        </div>
        <div className="movie-card__meta">
          <p className="movie-card__title">{movie.title}</p>
          <p className="movie-card__year">{year}</p>
        </div>
      </div>
    </button>
  );
}
