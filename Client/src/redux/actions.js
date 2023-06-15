import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";

//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(endpoint, character);
//       dispatch({
//         type: "ADD_FAV",
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error.message);
//       alert("Hubo un error al guardar tu favorito. Intenta de nuevo.");
//     }
//   };
// };

// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

//   return async (dispatch) => {
//     try {
//       const { data } = await axios.delete(endpoint);
//       dispatch({
//         type: "REMOVE_FAV",
//         payload: data,
//       });
//     } catch (error) {
//       console.error(error.message);
//       alert("Hubo un error al guardar tu favorito. Intenta de nuevo.");
//     }
//   };
// };

export const addFav = (character) => {
  return {
    type: "ADD_FAV",
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: "REMOVE_FAV",
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orderAD) => {
  return {
    type: ORDER,
    payload: orderAD,
  };
};
