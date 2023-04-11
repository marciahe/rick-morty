import React from "react";
import Card from "../Card/Card";
// import style from "./About.module.css"

const marcia = "../../../../public/marcia.gif"

export default function About (){
    return (
        <div className="container">
            <h1>Marcia Hernández</h1>
            <h4>Diseñadora, desarrolladora (wip) y amiga</h4>
            <Card
                id = "6666"
                name = "Marcia Hernández"
                status = "Alive"
                species = "Human"
                gender = "Female"
                origin = {{ name: "Guadalajara, Mexico, Earth" }}
                image = {marcia}
            />

        </div>

    )
}