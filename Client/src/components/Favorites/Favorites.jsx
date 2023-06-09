import { useSelector, useDispatch } from "react-redux";
import Card from '../Card/Card.jsx';
import { filterCards, orderCards } from '../../redux/actions.js'
import { useState } from "react";
import styles from './Favorites.module.css';


const Favorites = () => {
    const favorites = useSelector(state=>state.myFavorites);
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(true);
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    return(
        <div className={styles.favs}>
            <h1> ❤️ Tus favoritos </h1>
            <select onChange={handleOrder} >
                <option disabled='disabled'>Ordena por...</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter} >
                <option value="All">Filtra por...</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            <div className={styles.favsContainer}>

                {favorites.map((character) => {
                    return(
                        <Card 
                            key = {character.id}
                            id = {character.id}
                            name = {character.name}
                            status = {character.status}
                            species = {character.species}
                            gender = {character.gender}
                            origin = {character.origin}
                            image = {character.image}
                            />
                    );
                })}
            </div>
        </div>
    );
};

export default Favorites;