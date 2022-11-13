import React from "react";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">TERRRNY</a>
      </div>
      <div>
        <ul className="navbar__list">
          <li className="navbar__item">
            <p>
              <a href="/Dossier">Vajnaya Infa</a>
            </p>
          </li>
          <li className="navbar__item">
            <p>
              <a href="#">Nevajnaya Infa</a>
            </p>
          </li>
          <li className="navbar__item">
            <p>
              <a href="#">Contacts</a>
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
