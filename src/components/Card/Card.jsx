import { Link } from "react-router-dom";
import  { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions.js"
import { useEffect, useState } from "react";
import style from "./Card.module.css";


const Card = ({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {
   // const myFavorites = useSelector((state) => state.myFavorites)

   const [isFav, setIsFav] = useState(false);

   
   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, status, species, gender, origin, image, onClose, addFav, removeFav });
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
            {isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
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
};

const mapDispatchToProps = (dispatch) => {
    return{
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      },
    }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);