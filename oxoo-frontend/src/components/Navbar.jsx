// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        <NavLink to="/" className="logo">ОХОО!</NavLink>

        <div className="nav-links">
          <NavLink to="/islands">Острова</NavLink>
          <NavLink to="/artifacts">Артефакты</NavLink>
          <NavLink to="/map">Карта памяти</NavLink>
          <NavLink to="/stories">Истории</NavLink>
          <NavLink to="/about">О проекте</NavLink>
          

          <NavLink to="/tickets" className="ticket-btn">
            Купить билет
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
