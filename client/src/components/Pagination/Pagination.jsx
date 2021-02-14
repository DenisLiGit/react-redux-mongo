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
    const {getPage, setPage, getPageType, getTotalPages} = props
    const classes = useStyles();
    const [pageNum, setPageNum] = React.useState(getPage());

    const handleChange = (event, value) => {
        setPage(getPageType(), value)
        setPageNum(value);
    };

    return (
        <div className={classes.root}>
            <Pagination count={getTotalPages()} page={pageNum} onChange={handleChange}/>
        </div>
    );
}