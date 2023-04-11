import React from "react";
// import Card from "../Card/Card";
import style from "./About.module.css"

const id = "6666"
const name = "Marcia Hernández"
const status = "Alive"
const species = "Human"
const gender = "Female"
// origin = {{ name: "Guadalajara, Mexico, Earth" }}
// image = {"https://i.imgur.com/2YRZrEr.gif"}
const image = "https://i.imgur.com/nGsJ3Y0.png"
export default function About (){
    return (
        <div className={style.container}>
                



            <h2 className={style.charName}>{name}
            <span className={style.status}>{status === 'Alive' ? '🟢' : status === 'Dead' ? '☠️' : '❓'}</span>
            </h2>
            
            <div className={style.image} style={{backgroundImage: `url(${image})`}}></div>

            <h3 className={style.species}>
                Species: {species} 
                <span className={style.gender}>
                    <span>{gender === "Male" ? "🙍‍♂️" : gender === "Female" ? "🙍‍♀️" : gender === "Unknown" ? "❓" : "🤷"}</span>
                    {gender}
                </span>
            </h3>

            <h3>Origin: {origin.name}</h3>


            <div className={style.actions}>
                {/* {isFav 
                    ? (<button className={`${style.btn} ${style.fav}`} onClick={handleFavorite}>❤️</button>) 
                    : (<button className={`${style.btn} ${style.fav}`} onClick={handleFavorite}>🤍</button>)
                } */}
                {/* <h4 className={style.hidden}>#{id}</h4> */}
                {/* <button className={`${style.btn} ${style.close}`}  onClick={() =>onClose(id)}>🗑</button> */}
            </div>

        </div>

    )
}