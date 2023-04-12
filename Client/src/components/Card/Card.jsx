import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
   }, [myFavorites, id]);

   return (
      <div className={style.container}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.charName}>{name}
               <span className={style.status}>{status === 'Alive' ? '🟢' : status === 'Dead' ? '☠️' : '❓'}</span>
               </h2>
               
               <div className={style.image} style={{backgroundImage: `url(${image})`}}>
               </div>

               <h3 className={style.species}>
                  Species: {species} 
                  <span className={style.gender}>
                     <span>{gender === "Male" ? "🙍‍♂️" : gender === "Female" ? "🙍‍♀️" : gender === "Unknown" ? "❓" : "🤷"}</span>
                     {gender}
                  </span>
               </h3>

               <h3>Origin: {origin.name}</h3>

            </Link>  
            <div className={style.actions}>
               {isFav 
                  ? (<button className={`${style.btn} ${style.fav}`} onClick={handleFavorite}>❤️</button>) 
                  : (<button className={`${style.btn} ${style.fav}`} onClick={handleFavorite}>🤍</button>)
               }
               <h4 className={style.hidden}>#{id}</h4>
               <button className={`${style.btn} ${style.close}`}  onClick={() =>onClose(id)}>🗑</button>
            </div>
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