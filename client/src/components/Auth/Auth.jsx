import React from 'react'

import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import deepOrange from "@material-ui/core/colors/deepOrange";
import red from "@material-ui/core/colors/red";
import Button from "@material-ui/core/Button";
import {Field, reduxForm} from "redux-form";
import {Email, MaxLength, MinLength, Required} from "../../Validation/LogindValidation";

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
    },
    errorMessage: {
        color: red[700]
    }
})

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <>
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
        {touched &&
        ((error && <span>{error}</span>))}
    </>
)
const MaxLength50 = MaxLength(50)
const MinLength5 = MinLength(5)

const Auth = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, invalid, submitting} = props

    return (
        <Card>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container className={classes.wrap}>
                        <Grid item xs={4} className={classes.fieldsContainer}>
                            <h1>Авторизация</h1>
                            <Field
                                name='email'
                                component={renderTextField}
                                label='Логин'
                                id="standard-basic"
                                validate={[MaxLength50, MinLength5, Required, Email]}
                                className={classes.item}
                            />
                            <Field
                                name='password'
                                component={renderTextField}
                                label='Пароль'
                                id="standard-password-input"
                                type={"password"}
                                validate={[Required, MaxLength50, MinLength5]}
                                className={classes.item}
                            />
                        </Grid>
                        <Grid item xs={4} className={classes.buttonsContainer}>
                            <ColorButton
                                name='login'
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={() => props.userRegisterAC(false)}
                                disabled={pristine || invalid || submitting}
                                size="small">
                                Вход
                            </ColorButton>
                            <ColorButton
                                name='register'
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={() => props.userRegisterAC(true)}
                                disabled={pristine || invalid || submitting}
                                size="small">
                                Регистрация
                            </ColorButton>
                        </Grid>
                    </Grid>
                    <span className={classes.errorMessage}>{props.userMessage}</span>
                </form>
            </CardContent>
        </Card>
    )
}

const AuthForm = reduxForm({
    form: 'auth'
})(Auth)


const AuthBox = props => {
    const submit = (formData) => {
        if(props.userRegister) {
            props.registerUserThunk(formData)
        } else {
            props.loginUserThunk(formData)
        }
    }
    return <AuthForm onSubmit={submit} {...props} />
}

export default AuthBox