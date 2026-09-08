import { useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrending } from "../api/tmdb.js";
import { useMovieFetch } from "../hooks/useMovieFetch.js";
import { GENRES } from "../data/genres.js";


export default function Home() {
  const [selected, setSelected] = useState(null);
  const { movies, status, error } = useMovieFetch(fetchTrending, []);

  return (
    <main>
      {status === "loading" && <Loader />}
      {status === "error" && <ErrorMessage message={error} />}

      {status === "success" && (
        <>
          <Hero movie={movies[0]} onOpen={setSelected} />

          <section className="genre-nav">
            <h2>Browse by genre</h2>
            <div className="genre-nav__grid">
              {GENRES.map((g) => (
                <Link key={g.id} to={g.path} className="genre-nav__card">
                  {g.name}
                </Link>
              ))}
              <Link to="/all" className="genre-nav__card genre-nav__card--accent">
                All movies
              </Link>
            </div>
          </section>

          <section className="page">
            <div className="page__header">
              <h1 className="page__title--small">Trending this week</h1>
            </div>
            <MovieGrid movies={movies.slice(1)} onOpen={setSelected} />
          </section>
        </>
      )}

      <MovieModal movie={selected} onClose={() => setSelected(null)} />
    </main>
  );
}
