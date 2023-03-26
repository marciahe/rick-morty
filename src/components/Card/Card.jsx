import { Link } from "react-router-dom";
import style from "./Card.module.css";


export default function Card({id, name, status, species, gender, origin, image, onClose }) {
   return (
      <div className={style.container}>
            <Link to={`/detail/${id}`}>
               <img src={image} alt='' /> 
               <h2>Name: {name}</h2>
            </Link>  
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Origin: {origin.name}</h2>
            <button onClick={() =>onClose(id)}>X</button>
         </div>   
   );
}
