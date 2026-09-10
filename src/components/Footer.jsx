import Sprockets from "./Sprockets.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <Sprockets className="footer__sprockets" />
      <p>Movie data and thumbnails from TMDB. This product is not endorsed or certified by TMDB.</p>
    </footer>
  );
}
