import {connect} from "react-redux";
import AuthBox from "./Auth";
import {loginUserThunk, registerUserThunk, userRegisterAC} from "../../redux/userReduser";
import {compose} from "redux";
import LoginRedirect from "../../Hoc/LoginRedirect";
import {isAuthenticated} from "../../redux/selectors/generalSelectors";
import {userMessage, userRegister} from "../../redux/selectors/usersSelectors";

const mapStateToProps = (state) => {
    return {
        userRegister: userRegister(state),
        userMessage: userMessage(state),
        isAuthenticated: isAuthenticated(state)
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