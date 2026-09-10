import { X, Play, Bookmark } from "lucide-react";
import { backdropUrl } from "../api/tmdb.js";
import RatingBadge from "./RatingBadge.jsx";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const backdrop = backdropUrl(movie.backdrop_path || movie.poster_path);
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "—";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div
          className="modal__hero"
          style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
        >
          <button className="modal__close" onClick={onClose} aria-label="Close">
            <X size={16} color="#F3E9E0" />
          </button>
          <div className="modal__hero-fade">
            <h3>{movie.title}</h3>
          </div>
        </div>

        <div className="modal__body">
          <div className="modal__meta">
            <RatingBadge rating={movie.vote_average} />
            <span className="pill">{year}</span>
          </div>
          <p className="modal__overview">
            {movie.overview || "No synopsis available for this title yet."}
          </p>
          <div className="modal__actions">
            <button className="btn btn--primary">
              <Play size={14} fill="#F3E9E0" /> Watch trailer
            </button>
            <button className="btn btn--ghost">
              <Bookmark size={14} /> Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
