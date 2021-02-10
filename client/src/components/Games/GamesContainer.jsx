import {Games} from "./Games";
import {connect} from "react-redux";
import {getGameThunk} from "../../redux/gamesReducer";
import {compose} from "redux";
import AuthRedirect from "../../Hoc/AuthRedirect";
import {isAuthenticated, loader} from "../../redux/selectors/generalSelectors";
import {gamesPageNum, getGames} from "../../redux/selectors/gamesSelectors";

const mapStateToProps = (state) => {
    return {
        games: getGames(state),
        pageNum: gamesPageNum(state),
        loader: loader(state),
        isAuthenticated: isAuthenticated(state)
    }
}

export default compose(
    connect(mapStateToProps, {getGameThunk}),
    AuthRedirect
)(Games);