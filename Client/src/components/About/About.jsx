import React from "react";
import Card from "../Card/Card";

export default function About ({onClose}){
    return (
        <div>
            <h1>Marcia Hernández</h1>
            <h4>Diseñadora, desarrolladora (wip) y amiga</h4>
            <Card
                id = "6666"
                name = "Marcia Hernández"
                status = ""
                species = "Humana"
                gender = "Femenino"
                origin = {{ name: "Guadalajara, Mexico, Earth" }}
                image = ""
                onClose={onClose}
            />

        </div>

    )
}