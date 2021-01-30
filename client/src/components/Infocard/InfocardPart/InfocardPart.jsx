import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {},
});

export const InfocardPart = (props) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography component="span">
                {props.data.name ? `${props.data.name}: ` : null}
            </Typography>
            {props.type === 'a' && (
                <Typography href={props.data.content} target="blank" component={props.type}>
                    {!props.data.content ? '-' : props.data.content}
                </Typography>
            )}
            {props.type === 'span' && (
                <Typography component={props.type}>
                    {!props.data.content ? '-' : props.data.content}
                </Typography>
            )}
            {props.type === 'img' && (
                <Typography component={props.type} src={props.data.content} />
            )}
        </Box>
    )
}