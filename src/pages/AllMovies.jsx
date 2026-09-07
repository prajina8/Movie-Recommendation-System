import { useState } from "react";
import { fetchPopular } from "../api/tmdb.js";
import { useMovieFetch } from "../hooks/useMovieFetch.js";
import MovieGrid from "../components/MovieGrid.jsx";
import MovieModal from "../components/MovieModal.jsx";
import Loader from "../components/Loader.jsx";
import ErrorMessage from "../components/ErrorMessage.jsx";
import Sprockets from "../components/Sprockets.jsx";

export default function AllMovies() {
  const [selected, setSelected] = useState(null);
  const { movies, status, error } = useMovieFetch(fetchPopular, []);

  return (
    <main className="page">
      <div className="page__header">
        <Sprockets className="page__sprockets" />
        <h1>All movies</h1>
        <p className="page__description">Popular titles across every genre.</p>
      </div>

      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage message={error} />}
      {status === "success" && <MovieGrid movies={movies} onOpen={setSelected} />}

      <MovieModal movie={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
