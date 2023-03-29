import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions.js"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state, 
                myFavorites:[...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case REMOVE_FAV:
            const actionPayload = parseInt(action.payload)
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== actionPayload
                ),
            };
        case FILTER:
            const allCharsFiltered = 
                action.payload === "All" 
                    ? state.allCharacters
                    : state.allCharacters.filter(char => char.gender === action.payload);
            return {
                ...state, 
                myFavorites: allCharsFiltered,
            };
        case ORDER:
            const order = action.payload;
            const orderedChars = [...state.myFavorites];

            orderedChars.sort((a, b) => {
                if (order === "A") {
                    return a.id - b.id; // Ordenamos de menor a mayor
                } else if (order === "D") {
                    return b.id - a.id; // Ordenamos de mayor a menor
                } else {
                    return 0; // Si el payload no es "A" ni "D", no ordenamos
                }
            });

            return {
                ...state,
                myFavorites: orderedChars,
            }
        default:
            return {...state}
    }
}

export default rootReducer;