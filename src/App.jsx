import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Action from "./pages/Action.jsx";
import Comedy from "./pages/Comedy.jsx";
import Crime from "./pages/Crime.jsx";
import Drama from "./pages/Drama.jsx";
import Romance from "./pages/Romance.jsx";
import SciFi from "./pages/SciFi.jsx";
import Thriller from "./pages/Thriller.jsx";
import AllMovies from "./pages/AllMovies.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllMovies />} />
        <Route path="/action" element={<Action />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/crime" element={<Crime />} />
        <Route path="/drama" element={<Drama />} />
        <Route path="/romance" element={<Romance />} />
        <Route path="/sci-fi" element={<SciFi />} />
        <Route path="/thriller" element={<Thriller />} />
      </Routes>
      <Footer />
    </div>
  );
}
