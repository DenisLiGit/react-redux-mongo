import React from 'react'
import {ReactComponent as Hexagon} from '../../img/hexagonal.svg'
import deepOrange from '@material-ui/core/colors/deepOrange';

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    start: {
        width: '160px',
        height: '160px',
        backgroundColor : deepOrange[500],
        borderRadius: '50%',
        position: 'relative',
        left: '-50px',
        top: '70px'
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    hex: {
        width: '17rem',
        fill: 'gray',
        position: 'relative'
    },
    hex_1: {
        width: '17rem',
        top: '128px'
    },
    hex_2: {
        width: '17rem',
    },
    hex_3: {
        width: '17rem',
        top: '152px'
    }
}));

export const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Hexagon className={`${classes.hex} ${classes.hex_1}`} />
                <Hexagon className={`${classes.hex} ${classes.hex_2}`} />
                <Hexagon className={`${classes.hex} ${classes.hex_1}`} />
            </div>
            <div className={classes.wrapper}>
                <div className={classes.start} />
                <Hexagon className={`${classes.hex} ${classes.hex_3}`} />
            </div>
        </div>
    )
}