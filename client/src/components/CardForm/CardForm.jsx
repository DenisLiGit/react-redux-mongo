import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import deepOrange from '@material-ui/core/colors/deepOrange';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {Field, reduxForm} from "redux-form";
import {Required} from "../../Validation/LogindValidation";

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
    item: {
        padding: '5px',
        width: '100%',
        "&:not(.Mui-disabled) .MuiInput-underline:after": {
            borderColor: deepOrange[700]
        }
    },
    itemTextfield: {
        width: '100%',
        "&:not(.Mui-disabled) .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: deepOrange[700]
        }
    },
    itemSubmit: {
        margin: '1rem 0 0'
    }
})

const renderTextField = ({label, input, meta: {touched, invalid, error}, ...custom}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
)


const CreateCard = (props) => {
    const classes = useStyles()
    const {
        handleSubmit,
        pristine,
        invalid,
        submitting,
        cardTypeAC,
        cardType,
        genreOptions
    } = props

    return (
        <Card>
            <CardContent className={classes.wrap}>
                <form onSubmit={handleSubmit}>
                    <Grid item xs={4}>
                        <Field
                            name='type'
                            component={renderTextField}
                            label='Тип'
                            id="standard-select-currency"
                            className={classes.item}
                            onChange={(e) => cardTypeAC(e.target.value)}
                            select
                        >
                            <MenuItem value='book'> Книга </MenuItem>
                            <MenuItem value='serial'> Сериал </MenuItem>
                            <MenuItem value='film'> Фильм </MenuItem>
                            <MenuItem value='game'> Игра </MenuItem>
                            ))}
                        </Field>
                    </Grid>
                    {cardType && (
                        <>
                            <Grid container>
                                <Grid item xs={4}>
                                    <Field
                                        name='title'
                                        component={renderTextField}
                                        label='Название'
                                        id="standard-basic"
                                        validate={[Required]}
                                        className={classes.item}
                                    />
                                </Grid>
                                {cardType === 'book' && (<Grid item xs={4}>
                                    <Field
                                        name='author'
                                        component={renderTextField}
                                        label='Автор'
                                        id="standard-basic"
                                        className={classes.item}
                                    />
                                </Grid>)}
                                {cardType !== 'game' && (<Grid item xs={4}>
                                    <Field
                                        name='genre'
                                        component={renderTextField}
                                        label='Жанр'
                                        id="standard-select-currency"
                                        className={classes.item}
                                        select
                                    >
                                        {genreOptions.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Field>
                                </Grid>)}
                                {cardType === 'book' && (<Grid item xs={4}>
                                    <Field
                                        name='cycle'
                                        component={renderTextField}
                                        label='Цыкл'
                                        id="standard-basic"
                                        className={classes.item}
                                    />
                                </Grid>)}
                                <Grid item xs={4}>
                                    <Field
                                        name='link'
                                        component={renderTextField}
                                        label='Ссылка'
                                        id="standard-basic"
                                        className={classes.item}
                                    />
                                </Grid>
                                {cardType === 'game' && (<Grid item xs={4}>
                                    <Field
                                        name='img'
                                        component={renderTextField}
                                        label='Ссылка на обложку'
                                        id="standard-basic"
                                        className={classes.item}
                                    />
                                </Grid>)}
                            </Grid>
                            <Grid container item xs={12}>
                                <Field
                                    name='description'
                                    component={renderTextField}
                                    label='Описание'
                                    id="outlined-multiline-flexible"
                                    className={classes.itemTextfield}
                                    variant="outlined"
                                    validate={[Required]}
                                    multiline
                                    rowsMax={4}
                                />
                            </Grid>
                            <ColorButton
                                variant="contained"
                                className={classes.itemSubmit}
                                disabled={pristine || submitting || invalid}
                                type="submit">
                                Сохранить
                            </ColorButton>
                        </>
                    )}
                </form>
            </CardContent>
        </Card>
    )
}

const CardForm = reduxForm({
    form: 'createCard'
})(CreateCard)

const CardItem = (props) => {
    const onSubmit = formData => {
        props.createFavoriteThunk({formData, type: props.cardType})
    }

    return <CardForm onSubmit={onSubmit} {...props} />
}

export default CardItem