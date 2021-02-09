import {connect} from "react-redux";
import AuthBox from "./Auth";
import {loginUserThunk, registerUserThunk, userRegisterAC} from "../../redux/userReduser";
import {compose} from "redux";
import LoginRedirect from "../../Hoc/LoginRedirect";

const mapStateToProps = (state) => {
    return {
        userRegister: state.userReduser.userRegister,
        userMessage: state.userReduser.userMessage,
        isAuthenticated: state.userReduser.userInfo.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, {
        loginUserThunk,
        registerUserThunk,
        userRegisterAC,
    }),
    LoginRedirect
)(AuthBox)