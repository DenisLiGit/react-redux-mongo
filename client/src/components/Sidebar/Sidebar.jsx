import React, {useEffect} from 'react'

import {makeStyles, withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import CallMissedOutgoingIcon from '@material-ui/icons/CallMissedOutgoing';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import deepOrange from '@material-ui/core/colors/deepOrange';
import {NavLink} from "react-router-dom";

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[900],
        '&:hover': {
            backgroundColor: deepOrange[700],
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: 's',
        padding: '1rem'
    },
    wrap: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '5px 0',
    },
    iconWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    buttonIcon: {
        marginRight: '0.4rem'
    },
    buttonLink: {
        textDecoration: 'none'
    }
}));

export const Sidebar = (props) => {
    const classes = useStyles();
    const {
        getStatisticThunk,
        booksStat,
        booksRecentStat,
        filmsStat,
        filmsRecentStat,
        serialsStat,
        serialsRecentStat,
        gamesStat,
        gamesRecentStat,
        isAuthenticated
    } = props

    const subscribePush = (props) => {
        if (!('serviceWorker' in navigator)) {
            // Браузер не поддерживает сервис-воркеры.
            return;
        }
        if (!('PushManager' in window)) {
            // Браузер не поддерживает push-уведомления.
            return;
        }
    }

    useEffect(() => {
        getStatisticThunk()
    }, [getStatisticThunk])

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.wrap}>
                Статистика:
            </Typography>
            <Divider/>
            <Box className={classes.wrap}>
                <Box className={classes.iconWrap}>
                    <MenuBookIcon/>
                </Box>
                <Typography component="span" className={classes.iconWrap}>
                    {booksStat} ({booksRecentStat})
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.wrap}>
                <Box className={classes.iconWrap}>
                    <PlayCircleOutlineIcon/>
                </Box>
                <Typography component="span" className={classes.iconWrap}>
                    {filmsStat} ({filmsRecentStat})
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.wrap}>
                <Box className={classes.iconWrap}>
                    <SkipNextIcon/>
                </Box>
                <Typography component="span" className={classes.iconWrap}>
                    {serialsStat} ({serialsRecentStat})
                </Typography>
            </Box>
            <Divider/>
            <Box className={classes.wrap}>
                <Box className={classes.iconWrap}>
                    <SportsEsportsIcon/>
                </Box>
                <Typography component="span" className={classes.iconWrap}>
                    {gamesStat} ({gamesRecentStat})
                </Typography>
            </Box>
            <Divider/>
            {isAuthenticated && (
                <>
                    <Box className={classes.wrap}>
                        <ColorButton
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={subscribePush}>
                            <CallMissedOutgoingIcon className={classes.buttonIcon}/>
                            Подписаться
                        </ColorButton>
                    </Box>
                    <Divider/>
                    <Box className={classes.wrap}>
                        <NavLink exact to='/create' className={classes.buttonLink}>
                            <ColorButton
                                variant="contained"
                                color="primary"
                                size="small">
                                <AddCircleOutlineIcon className={classes.buttonIcon}/>
                                Избранное
                            </ColorButton>
                        </NavLink>
                    </Box>
                </>
            )}
        </div>
    )
}