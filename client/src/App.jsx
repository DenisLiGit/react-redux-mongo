import React, {useState} from 'react'

import {BrowserRouter as Router} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import {makeStyles} from '@material-ui/core/styles';
import {Content} from "./components/Content/Content";

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
                <Content />
            </Router>
        </div>
    );
}

export default App;
