import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./Nav.modules.css";

export default function Nav(props) {
  return (
    <div className="nav">
      <NavLink to="/home">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
          alt="Rick & morty logo"
        />
      </NavLink>

      <div className="menu-search">
        <SearchBar className="search" onSearch={props.onSearch} />
      </div>

      <div className="menu">
        <NavLink to="/home">
          <button>Personajes</button>
        </NavLink>
        <NavLink to="/favorites">
          <button>Favoritos</button>
        </NavLink>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </div>
  );
}
