import {Films} from "./Films";
import {connect} from "react-redux";
import {getFilmThunk} from "../../redux/filmsReducer";
import AuthRedirect from "../../Hoc/AuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        getFilms: () => {
            return state.filmsReducer.films
        },
        getPageNum: () => {
            return state.filmsReducer.filmsPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        },
        isAuthenticated: state.userReduser.userInfo.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, {getFilmThunk}),
    AuthRedirect)(Films);