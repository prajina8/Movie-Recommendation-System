import { useEffect, useState } from "react";

export function useMovieFetch(fetchFn, deps = []) {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setError(null);

    fetchFn()
      .then((data) => {
        if (!cancelled) {
          setMovies(data ?? []);
          setStatus("success");
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message || "Something went wrong while loading movies.");
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };

  }, deps);

  return { movies, status, error };
}
