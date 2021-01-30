import {Games} from "./Games";
import {connect} from "react-redux";
import {loaderAC} from "../../redux/contentReducer";
import {gamesTotalPagesAC, setGameDataAC} from "../../redux/gamesReducer";

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
        }
    }
}

const GameContaimer = connect(mapStateToProps, {
    setGameDataAC,
    gamesTotalPagesAC,
    loaderAC
})(Games)

export default GameContaimer