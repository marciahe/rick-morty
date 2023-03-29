import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav(props) {

    return (
        <div>
            <Link to="/about">
                <button>About</button>
            </Link>
                
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            
            <NavLink to="/favorites">
                <button>Favorites</button>
            </NavLink>
            
            <SearchBar onSearch={props.onSearch}/>

        </div>
    )
}