import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import deepOrange from '@material-ui/core/colors/deepOrange';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        '& li *': {
            color: deepOrange[500],
        },
        '& .Mui-selected': {
            backgroundColor: "white",
        },
    },
}));

export default function PaginationWrap(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(props.getPage());

    const handleChange = (event, value) => {
        props.setPage(props.getPageType(), value)
        setPage(value);
    };

    return (
        <div className={classes.root}>
            <Pagination count={props.getTotalPages()} page={page} onChange={handleChange}/>
        </div>
    );
}