import {combineReducers, createStore} from "redux";
import favoritesReducer from "./favoritesReducer";
import contentReducer from "./contentReducer";
import userReduser from "./userReduser";
import booksReducer from "./booksReducer";
import filmsReducer from "./filmsReducer";
import serialsReducer from "./serialsReducer";
import gamesReducer from "./gamesReducer";

let redusers = combineReducers({
    contentReducer,
    favoritesReducer,
    userReduser,
    booksReducer,
    filmsReducer,
    serialsReducer,
    gamesReducer
})

let store = createStore(redusers);

export default store