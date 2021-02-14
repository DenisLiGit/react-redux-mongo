import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";
import {isAuthenticated} from "../../redux/selectors/generalSelectors";
import {getStatisticThunk} from "../../redux/statisticReducer";
import {
    booksRecentStat,
    booksStat,
    filmsRecentStat,
    filmsStat, gamesRecentStat,
    gamesStat, serialsRecentStat,
    serialsStat
} from "../../redux/selectors/statisticSelectors";

const mapStateToProps = (state) => {
    return {
        booksStat: booksStat(state),
        filmsStat: filmsStat(state),
        serialsStat: serialsStat(state),
        gamesStat: gamesStat(state),
        booksRecentStat: booksRecentStat(state),
        filmsRecentStat: filmsRecentStat(state),
        serialsRecentStat: serialsRecentStat(state),
        gamesRecentStat: gamesRecentStat(state),
        isAuthenticated: isAuthenticated(state)
    }
}

const SidebarContainer = connect(mapStateToProps, {
    getStatisticThunk
})(Sidebar);

export default SidebarContainer;