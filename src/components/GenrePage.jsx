import { useState } from "react";
import { fetchMoviesByGenre } from "../api/tmdb.js";
import { useMovieFetch } from "../hooks/useMovieFetch.js";
import MovieGrid from "./MovieGrid.jsx";
import MovieModal from "./MovieModal.jsx";
import Loader from "./Loader.jsx";
import ErrorMessage from "./ErrorMessage.jsx";
import Sprockets from "./Sprockets.jsx";


export default function GenrePage({ genreId, title, description }) {
  const [selected, setSelected] = useState(null);
  const { movies, status, error } = useMovieFetch(() => fetchMoviesByGenre(genreId), [genreId]);

  return (
    <main className="page">
      <div className="page__header">
        <Sprockets className="page__sprockets" />
        <h1>{title}</h1>
        {description && <p className="page__description">{description}</p>}
      </div>

      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage message={error} />}
      {status === "success" && <MovieGrid movies={movies} onOpen={setSelected} />}

      <MovieModal movie={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
