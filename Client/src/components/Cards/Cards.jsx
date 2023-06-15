import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  if (characters.length === 0) {
    return (
      <div className={style.empty}>
         
        <p>¡Agrega un personaje ingresando un número del 1 al 827!</p>
      </div>
    );
  }
  return (
    <div className={style.container}>
      {characters
        .slice(0)
        .reverse()
        .map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={onClose}
            />
          );
        })}
    </div>
  );
}
