import React from 'react'
import {Redirect} from "react-router-dom";

const AuthRedirect = (Component) => {
    const AuthRedirectWrap = props => {
        if (!props.isAuthenticated) return <Redirect to={'/auth'} />
        return <Component {...props} />
    }
    return AuthRedirectWrap
}

export default AuthRedirect