import {Films} from "./Films";
import {connect} from "react-redux";
import {loaderAC} from "../../redux/contentReducer";
import {filmsTotalPagesAC, setFilmDataAC} from "../../redux/filmsReducer";

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
        }
    }
}

const FilmsContainer = connect(mapStateToProps, {
    setFilmDataAC,
    filmsTotalPagesAC,
    loaderAC
})(Films);

export default FilmsContainer;