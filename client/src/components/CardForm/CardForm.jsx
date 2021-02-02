import React from 'react'
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrap: {
        display: 'flex',
        flexDirection: 'column'
    },
    item: {
        padding: '5px',
        width: '100%'
    },
    itemTextfield: {
        width: '100%'
    },
    itemSubmit: {
        margin: '1rem 0 0'
    }
})

export const CardForm = (props) => {
    const classes = useStyles()

    return (
        <Card>
            <CardContent className={classes.wrap}>
                <form onSubmit={props.cardActions.handleSubmit}>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-basic"
                                label="Название"
                                value={props.data.name}
                                onChange={props.cardActions.setName}
                                className={classes.item}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                id="standard-basic"
                                label="Автор"
                                value={props.data.author}
                                onChange={props.cardActions.setAuthor}
                                className={classes.item}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                className={classes.item}
                                id="standard-select-currency"
                                select
                                label="Select"
                                value={props.data.janra}
                                onChange={props.cardActions.setJanra}
                                helperText="Основной жанр книги"
                            >
                                {props.data.janraOptions.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <TextField
                            className={classes.itemTextfield}
                            id="outlined-multiline-flexible"
                            label="Multiline"
                            multiline
                            rowsMax={4}
                            value={props.data.description}
                            onChange={props.cardActions.setDiscr}
                            variant="outlined"
                        />
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.itemSubmit}
                        type="submit">
                        Сохранить
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}