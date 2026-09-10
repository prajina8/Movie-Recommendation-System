import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flame, Menu, X } from "lucide-react";
import { GENRES } from "../data/genres.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/all", name: "All" },
    ...GENRES.map((g) => ({ path: g.path, name: g.name })),
  ];

  return (
    <header className="navbar">
      <div className="navbar__row">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <Flame size={20} color="#A62639" fill="#A62639" />
          <span>Ember</span>
        </NavLink>

        <nav className="navbar__links navbar__links--desktop">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button className="navbar__toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} color="#F3E9E0" /> : <Menu size={20} color="#F3E9E0" />}
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
