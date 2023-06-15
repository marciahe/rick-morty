import React from "react";
// import Card from "../Card/Card";
import style from "./About.module.css";

const id = "6666";
const name = "Marcia Hernández";
const status = "Alive";
const species = "Human";
const gender = "Female";
// origin = {{ name: "Guadalajara, Mexico, Earth" }}
// image = {"https://i.imgur.com/2YRZrEr.gif"}
const image = "https://i.imgur.com/nGsJ3Y0.png";
export default function About() {
  return (
    <div className={style.container}>
      <h2 className={style.charName}>
        {name}
        <span className={style.status}>
          {status === "Alive" ? "🟢" : status === "Dead" ? "☠️" : "❓"}
        </span>
      </h2>

      <div
        className={style.image}
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <h3 className={style.species}>Species: {species}</h3>

      <h3 className="about-gender">
        <span>
          {gender === "Female" ? "🙍‍♀️" : gender === "Unknown" ? "❓" : "🤷"}
        </span>
        {gender}
      </h3>

      <h3>Origin: Guadalajara, México </h3>
      <br></br>
      <h3>
        <a href="https://www.linkedin.com/in/marciaht/" target="_blank">
          Linkedin: @marciaht
        </a>
      </h3>
      <br></br>

      <h3>
        <a href="https://github.com/marciahe/" target="_blank">
          Github: @marciahe
        </a>
      </h3>
    </div>
  );
}
