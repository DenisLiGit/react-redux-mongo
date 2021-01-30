import {connect} from "react-redux";
import {Auth} from "./Auth";
import {logUserIn, userEmail, userPassword} from "../../redux/userReduser";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        userInfo: state.userReduser.userInfo
    }
}

const withRouterAuth = withRouter(Auth)

const AuthContainer = connect(mapStateToProps, {
    userEmail,
    userPassword,
    logUserIn
})(withRouterAuth)

export default AuthContainer