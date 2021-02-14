import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import grey from "@material-ui/core/colors/grey";
import deepOrange from '@material-ui/core/colors/deepOrange';
import Delete from '@material-ui/icons/Delete';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import {InfocardPart} from "./InfocardPart/InfocardPart";
import {InfocardActionAdd} from "./InfocardAction/InfocardActionAdd";

const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
        marginTop: '10px',
        display: 'flex',
        borderWidth: '5px',
        borderStyle: 'solid',
        maxWidth: '950px'
    },
    content: {
        flexGrow: 1
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        "&> a": {
            color: grey[700]
        },
        "&> a:hover": {
            color: deepOrange[700]
        },
        "&> a:active": {
            color: deepOrange[900]
        }
    },
    carefully: {
        borderColor: red[300]
    },
    interest: {
        borderColor: green[600]
    },
    regular: {
        borderColor: 'white'
    }
});

export const Infocard = (props) => {
    const {
        data,
        type,
        userId,
        setFavoriteThunk,
        deleteFavoriteThunk,
        saveFavorites
    } = props
    const classes = useStyles();

    const getColors = (color) => {
        switch (color) {
            case 'carefully':
                return classes.carefully
            case 'interest':
                return classes.interest
            default:
                return classes.regular
        }
    }
    const setFavorite = (cardInfo) => {
        setFavoriteThunk(cardInfo)
    }

    const delFavorite = (id, userId) => {
        deleteFavoriteThunk(id, userId)
    }

    return (
        <Card className={`${classes.root} ${getColors('regular')}`}>
            <CardContent className={classes.content}>
                <InfocardPart data={data.title} type='span'/>
                {data.img && data.img.content && (
                    <InfocardPart data={data.img} type='img'/>
                )}
                {data.cycle && data.cycle.content && (
                    <InfocardPart data={data.cycle} type='span'/>
                )}
                {data.author && data.author.content && (
                    <InfocardPart data={data.author} type='span'/>
                )}
                {data.genre && data.genre.content && (
                    <InfocardPart data={data.genre} type='span'/>
                )}
                {data.description && data.description.content && (
                    <InfocardPart data={data.description} type='span'/>
                )}
                <InfocardPart data={data.link} type='a'/>
            </CardContent>
            <CardActions className={classes.actions} disableSpacing={true}>
                {type !== 'favorites' && (
                    <InfocardActionAdd
                        setFavorite={setFavorite}
                        id={data.id}
                        userId={userId}
                        saveFavorites={saveFavorites}/>
                )}

                {type === 'favorites' && (
                    <Link onClick={() => delFavorite(data.id, userId)}>
                        <Delete/>
                    </Link>
                )}

            </CardActions>
        </Card>
    )
}