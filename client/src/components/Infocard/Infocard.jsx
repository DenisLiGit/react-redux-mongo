import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import grey from "@material-ui/core/colors/grey";
import deepOrange from '@material-ui/core/colors/deepOrange';
import {InfocardPart} from "./InfocardPart/InfocardPart";
import Star from '@material-ui/icons/Star';
import Delete from '@material-ui/icons/Delete';
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";
import {deleteFavoriteDataAction, setFavoriteDataAction} from "../../action/Actions";

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
        setFavoriteDataAction(cardInfo)
    }

    const delFavorite = (id) => {
        deleteFavoriteDataAction(id).then(res => {
            if (res) {
                props.favoritesUpdate(true)
            }
        })
    }

    return (
        <Card className={`${classes.root} ${getColors('regular')}`}>
            <CardContent className={classes.content}>
                <InfocardPart data={props.data.title} type='span'/>
                { props.data.img && props.data.img.content && (
                    <InfocardPart data={props.data.img} type='img' />
                )}
                { props.data.cycle && props.data.cycle.content && (
                    <InfocardPart data={props.data.cycle} type='span'/>
                )}
                { props.data.author && props.data.author.content && (
                    <InfocardPart data={props.data.author} type='span'/>
                )}
                { props.data.genre && props.data.genre.content && (
                    <InfocardPart data={props.data.genre} type='span'/>
                )}
                { props.data.description && props.data.description.content && (
                    <InfocardPart data={props.data.description} type='span'/>
                )}
                <InfocardPart data={props.data.link} type='a'/>
            </CardContent>
            <CardActions className={classes.actions} disableSpacing={true}>
                { props.type !== 'favorites' && (
                    <Link onClick={() => setFavorite({id: props.data.id, type: props.type})}>
                        <Star />
                    </Link>
                )}

                { props.type === 'favorites' && (
                    <Link onClick={() => delFavorite({id: props.data.id})}>
                        <Delete />
                    </Link>
                )}

            </CardActions>
        </Card>
    )
}