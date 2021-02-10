import {Films} from "./Films";
import {connect} from "react-redux";
import {getFilmThunk} from "../../redux/filmsReducer";
import AuthRedirect from "../../Hoc/AuthRedirect";
import {compose} from "redux";
import {isAuthenticated, loader} from "../../redux/selectors/generalSelectors";
import {filmsPageNum, getFilms} from "../../redux/selectors/filmsSelectors";

const mapStateToProps = (state) => {
    return {
        films: getFilms(state),
        pageNum: filmsPageNum(state),
        loader: loader(state),
        isAuthenticated: isAuthenticated(state)
    }
}

export default compose(
    connect(mapStateToProps, {getFilmThunk}),
    AuthRedirect)(Films);