import React from 'react'
import {Redirect} from "react-router-dom";

const LoginRedirect = (Component) => {
    const LoginRedirectWrap = props => {
        if (props.isAuthenticated) return <Redirect to={'/books'} />
        return <Component {...props} />
    }
    return LoginRedirectWrap
}

export default LoginRedirect