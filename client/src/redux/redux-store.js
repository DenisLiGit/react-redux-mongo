import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import favoritesReducer from "./favoritesReducer";
import contentReducer from "./contentReducer";
import userReduser from "./userReduser";
import booksReducer from "./booksReducer";
import filmsReducer from "./filmsReducer";
import serialsReducer from "./serialsReducer";
import gamesReducer from "./gamesReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import cardReducer from "./cardReducer";
import statisticReducer from "./statisticReducer";

const reducer = combineReducers({
    contentReducer,
    favoritesReducer,
    userReduser,
    booksReducer,
    filmsReducer,
    serialsReducer,
    gamesReducer,
    cardReducer,
    statisticReducer,
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

export default store