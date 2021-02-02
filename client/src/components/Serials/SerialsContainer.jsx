import {Serials} from "./Serials";
import {connect} from "react-redux";
import {getSerialThunk} from "../../redux/serialsReducer";
import {compose} from "redux";
import AuthRedirect from "../../Hoc/AuthRedirect";

const mapStateToProps = (state) => {
    return {
        getSerials: () => {
            return state.serialsReducer.serials
        },
        getPageNum: () => {
            return state.serialsReducer.serialsPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        },
        isAuthenticated: state.userReduser.userInfo.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, {getSerialThunk}),
    AuthRedirect
)(Serials)