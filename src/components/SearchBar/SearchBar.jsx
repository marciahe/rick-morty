import { useState } from "react";
// import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   const [id, setID] = useState("");

   const handleChange = (event) => {
      setID(event.target.value)
   };

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
