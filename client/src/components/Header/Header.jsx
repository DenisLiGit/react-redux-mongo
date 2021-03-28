import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import BookIcon from '@material-ui/icons/Book';
import Typography from "@material-ui/core/Typography";
import deepOrange from '@material-ui/core/colors/deepOrange';
import grey from '@material-ui/core/colors/grey';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        gridArea: 'h',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '0 1rem',
        backgroundColor: grey[900]
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textDecoration: 'none'
    },
    wrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&> a": {
            color: 'white',
            textDecoration: 'none'
        },
        "&> a:hover, a.active": {
            color: deepOrange[500]
        }
    },
}));

export const Header = (props) => {
    const {isAuthenticated, logoutUserThunk} = props
    const classes = useStyles()

    return (
        <AppBar position="static" className={classes.root}>
            <Box className={classes.logo}>
                <NavLink exact to='/' className={classes.logo}>
                    <BookIcon/>
                    <Typography variant="h6" component="h1">
                        DV
                    </Typography>
                </NavLink>
            </Box>
            <Box className={classes.wrap}>
               <NavLink exact activeClassName="active" to='/books'>
                    <Button color="inherit">
                        Книги
                    </Button>
                </NavLink>
                <NavLink exact activeClassName="active" to='/films'>
                    <Button color="inherit">
                        Фильмы
                    </Button>
                </NavLink>
                <NavLink exact activeClassName="active" to='/serials'>
                    <Button color="inherit">
                        Сериалы
                    </Button>
                </NavLink>
                <NavLink exact activeClassName="active" to='/games'>
                    <Button color="inherit">
                        Игры
                    </Button>
                </NavLink>
                {isAuthenticated && (
                    <NavLink exact activeClassName="active" to='/favorites'>
                        <Button color="inherit">
                            Избранное
                        </Button>
                    </NavLink>
                )}

                {!isAuthenticated && (
                    <NavLink exact activeClassName="active" to='/auth'>
                        <Button color="inherit">
                            Авторизация
                        </Button>
                    </NavLink>
                )}

                {isAuthenticated && (
                    <NavLink to="/auth" onClick={() => logoutUserThunk()}>
                        <Button color="inherit">
                            Выход
                        </Button>
                    </NavLink>
                )}
            </Box>
        </AppBar>
    )
}