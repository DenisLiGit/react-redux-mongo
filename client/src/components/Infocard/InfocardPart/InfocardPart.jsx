import React from 'react'

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
    root: {
        "& *": {
            wordBreak: 'break-all'
        }
    },
});

export const InfocardPart = (props) => {
    const {data, type} = props
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography component="span">
                {data.name ? `${data.name}: ` : null}
            </Typography>
            {type === 'a' && (
                <Typography href={data.content} target="blank" component={type}>
                    {!data.content ? '-' : data.content}
                </Typography>
            )}
            {type === 'span' && (
                <Typography component={type}>
                    {!data.content ? '-' : data.content}
                </Typography>
            )}
            {type === 'img' && (
                <Typography component={type} src={data.content}/>
            )}
        </Box>
    )
}