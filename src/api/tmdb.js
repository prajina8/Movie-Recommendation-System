

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";
export const BACKDROP_BASE = "https://image.tmdb.org/t/p/w780";

async function request(path, params = {}) {
  if (!API_KEY) {
    throw new Error(
      "Missing TMDB API key. Copy .env.example to .env and add VITE_TMDB_API_KEY, then restart the dev server."
    );
  }

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const res = await fetch(url.toString());

  if (!res.ok) {
    if (res.status === 401) {
      throw new Error("TMDB rejected the API key. Double-check VITE_TMDB_API_KEY in your .env file.");
    }
    throw new Error(`TMDB request failed (status ${res.status}). Please try again.`);
  }

  return res.json();
}

export async function fetchMoviesByGenre(genreId, page = 1) {
  const data = await request("/discover/movie", {
    with_genres: genreId,
    sort_by: "popularity.desc",
    page,
  });
  return data.results;
}

export async function fetchPopular(page = 1) {
  const data = await request("/movie/popular", { page });
  return data.results;
}

export async function fetchTrending() {
  const data = await request("/trending/movie/week");
  return data.results;
}

export function posterUrl(path) {
  return path ? `${IMAGE_BASE}${path}` : null;
}

export function backdropUrl(path) {
  return path ? `${BACKDROP_BASE}${path}` : null;
}
