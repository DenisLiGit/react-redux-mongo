import React from 'react'

import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import deepOrange from "@material-ui/core/colors/deepOrange";
import Button from "@material-ui/core/Button";
import {userloading} from "../../redux/userReduser";
import {loginUserAction, registerUserAction} from "../../action/Actions";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[900],
        '&:hover': {
            backgroundColor: deepOrange[700],
        },
    },
}))(Button);

const useStyles = makeStyles({
    wrap: {
        display: 'flex',
        flexDirection: 'column'
    },
    fieldsContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttonsContainer: {
        "& button": {
            margin: '10px 5px'
        }
    }
})

export const Auth = (props) => {
    const classes = useStyles();
    const {
        userEmail,
        userPassword,
        logUserIn
    } = props

    const userLogin = (useInfo) => {
        userloading(true)
        loginUserAction(useInfo).then(data => {
            logUserIn(data)
            userloading(false)
            props.history.push('/')
        })
    }

    const userRegister = (useInfo) => {
        registerUserAction(useInfo)
    }

    return (
        <Card>
            <CardContent>
                <form>
                    <Grid container className={classes.wrap}>
                        <Grid item xs={4} className={classes.fieldsContainer}>
                            <h1>Авторизация</h1>
                            <TextField
                                id="standard-basic"
                                label="Логин"
                                name="email"
                                value={props.userInfo.email}
                                onChange={(e) => userEmail(e.target.value)}
                                disabled={props.userInfo.loading}
                            />
                            <TextField
                                id="standard-password-input"
                                label="Пароль"
                                name="password"
                                type="password"
                                value={props.userInfo.password}
                                onChange={(e) => userPassword(e.target.value)}
                                disabled={props.userInfo.loading}
                            />
                        </Grid>
                        <Grid item xs={4} className={classes.buttonsContainer}>
                            <ColorButton
                                variant="contained"
                                color="primary"
                                onClick={() => userLogin({
                                    email: props.userInfo.email,
                                    password: props.userInfo.password
                                })}
                                size="small">
                                Вход
                            </ColorButton>
                            <ColorButton
                                variant="contained"
                                color="primary"
                                onClick={() => userRegister({
                                    email: props.userInfo.email,
                                    password: props.userInfo.password
                                })}
                                size="small">
                                Регистрация
                            </ColorButton>
                        </Grid>

                    </Grid>
                </form>
            </CardContent>
        </Card>
    )
}