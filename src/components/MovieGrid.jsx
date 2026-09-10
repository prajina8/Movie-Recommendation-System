import MovieCard from "./MovieCard.jsx";

export default function MovieGrid({ movies, onOpen }) {
  if (!movies || movies.length === 0) {
    return <p className="empty-state">No movies found here yet. Try another genre.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onOpen={onOpen} />
      ))}
    </div>
  );
}
