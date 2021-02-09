import React, {useState} from 'react'

import {BrowserRouter as Router} from "react-router-dom";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateAreas: `"h h"
                            "s c"`,
        gridTemplateRows: '60px 1fr',
        gridTemplateColumns: '215px 1fr',
        maxWidth: '1220px',
        margin: '0 auto'
    },
}));

function App(props) {
    const classes = useStyles()
    const logUserIn = props.userLogIn

    useState(() => {
        logUserIn({
            "token": localStorage.getItem("token"),
            "userid": localStorage.getItem("userid")
        })
    }, [])

    return (
        <div className={classes.root}>
            <Router>
                <HeaderContainer />
                <SidebarContainer />
                <ContentContainer />
            </Router>
        </div>
    );
}

export default App;
