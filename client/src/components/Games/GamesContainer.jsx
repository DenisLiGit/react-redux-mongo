import {Games} from "./Games";
import {connect} from "react-redux";
import {getGameThunk} from "../../redux/gamesReducer";
import {compose} from "redux";
import AuthRedirect from "../../Hoc/AuthRedirect";

const mapStateToProps = (state) => {
    return {
        getGames: () => {
            return state.gamesReducer.games
        },
        getPageNum: () => {
            return state.gamesReducer.gamesPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        },
        isAuthenticated: state.userReduser.userInfo.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, {getGameThunk}),
    AuthRedirect
)(Games);