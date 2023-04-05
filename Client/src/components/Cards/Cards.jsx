import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.container}>
         {
            characters.slice(0).reverse().map((character) => {
               return ( 
                  <Card 
                     key = {character.id}
                     id = {character.id}
                     name = {character.name}
                     status = {character.status}
                     species = {character.species}
                     gender = {character.gender}
                     origin = {character.origin}
                     image = {character.image}
                     onClose={onClose}
                  />
               );
               })}
      </div>
   );
}
