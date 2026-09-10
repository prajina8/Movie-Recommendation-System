#  Movie Recommendation Frontend

A responsive, dark-themed (black / brown / red) React app built with Vite.
Each genre has its own page, and every page calls The Movie Database (TMDB)
API independently to load real movie thumbnails, ratings, and synopses.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your TMDB API key

1. Get a free key at https://www.themoviedb.org/settings/api (the "API Key
   (v3 auth)" one).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Paste your key into `.env`:
   ```
   VITE_TMDB_API_KEY=your_real_key_here
   ```

Without a key, every page will show a friendly error telling you to add one.

## 3. Run it

```bash
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  api/tmdb.js          → all TMDB API calls live here (one place to swap
                          providers or add your own backend later)
  data/genres.js        → genre name → TMDB genre id map, used by the nav
                          and by every genre page
  hooks/useMovieFetch.js→ shared loading/error/success hook used by every
                          page that fetches movies
  components/
    Navbar.jsx           → top navigation, links to every page
    Footer.jsx
    Hero.jsx              → homepage hero (this week's #1 trending movie)
    Sprockets.jsx        → decorative film-strip divider
    RatingBadge.jsx
    MovieCard.jsx         → poster thumbnail + rating, opens the modal
    MovieGrid.jsx         → responsive grid of MovieCards
    MovieModal.jsx        → detail popup (synopsis, rating, actions)
    Loader.jsx / ErrorMessage.jsx
    GenrePage.jsx         → shared template every genre page renders
                            through — fetches fetchMoviesByGenre(genreId)
                            on its own
  pages/
    Home.jsx        → hero + genre nav + trending row
    AllMovies.jsx    → popular movies across all genres
    Action.jsx
    Comedy.jsx
    Crime.jsx
    Drama.jsx
    Romance.jsx
    SciFi.jsx
    Thriller.jsx
  App.jsx      → routes (react-router-dom)
  main.jsx     → mounts the app
  index.css    → the whole black/brown/red theme (CSS variables + styles)
```

## Swapping in your own backend

If you'd rather serve recommendations from your own MERN API instead of
TMDB directly, replace the functions in `src/api/tmdb.js` with calls to
your Express endpoints — every page and component consumes those functions
without needing to know where the data comes from, so nothing else has to
change. Keep returning objects shaped like TMDB's (`title`, `poster_path`,
`vote_average`, `release_date`, `overview`) or adjust `MovieCard.jsx` and
`MovieModal.jsx` to match your own field names.
