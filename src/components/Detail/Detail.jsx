import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail () {
    const {id} = useParams();
    
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            {Object.keys(character).length > 0 ? (
            <>
                <h2>{character.name}</h2>
                <p>Status: {character.status ? character.status : 'Desconocido'}</p>
                <p>Species: {character.species ? character.species : 'Desconocido'}</p>
                <p>Gender: {character.gender ? character.gender : 'Desconocido'}</p>
                <p>Origin: {character.origin ? character.origin.name : 'Desconocido'}</p>
                <img src={character.image} alt={character.name} />
            </>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )

}