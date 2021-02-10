import React from 'react'

import {makeStyles} from "@material-ui/core/styles";
import {Switch, Route, Redirect} from "react-router-dom";
import CardFormContainer from "../CardForm/CardFormContainer";
import AuthContainer from "../Auth/AuthContainer";
import BooksContainer from "../Books/BooksContainer";
import FilmsContainer from "../Films/FilmsContainer";
import FavoritesContainer from "../Favorites/FavoritesContainer";
import SerialContaimer from "../Serials/SerialsContainer";
import GameContaimer from "../Games/GamesContainer";
import {Main} from "../Main/Main";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: '1rem',
        gridArea: 'c',
    },
}));

export const Content = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>

            <Switch>
                <Route exact path='/'>
                    <Main />
                </Route>
                <Route exact path='/books'>
                    <BooksContainer />
                </Route>
                <Route exact path='/films'>
                   <FilmsContainer />
                </Route>
                <Route exact path='/serials'>
                    <SerialContaimer />
                </Route>
                <Route exact path='/games'>
                    <GameContaimer />
                </Route>
                <Route exact path='/favorites'>
                    <FavoritesContainer />
                </Route>
                <Route exact path='/create'>
                    <CardFormContainer />
                </Route>
                <Route exact path="/auth">
                    <AuthContainer />
                </Route>
                <Redirect to="/"/>
            </Switch>
        </main>
    )
}