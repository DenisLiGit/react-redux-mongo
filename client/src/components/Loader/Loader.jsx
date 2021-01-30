import React from 'react'
import loader from '../../img/RollingLoader.svg'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 100px)'
    },
}));

export const Loader = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <img src={loader} alt='loader' />
        </div>
    )
}