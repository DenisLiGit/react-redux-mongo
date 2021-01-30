import PaginationWrap from './Pagination'
import {connect} from "react-redux";
import {booksPageAC} from "../../redux/booksReducer";
import {filmsPageAC} from "../../redux/filmsReducer";
import {serialsPageAC} from "../../redux/serialsReducer";
import {gamesPageAC} from "../../redux/gamesReducer";
import {favoritesPageAC} from "../../redux/favoritesReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        getPage() {
            switch (ownProps.type) {
                case 'books':
                    return state.booksReducer.booksPageNum
                case 'films':
                    return state.filmsReducer.filmsPageNum
                case 'serials':
                    return state.serialsReducer.serialsPageNum
                case 'games':
                    return state.gamesReducer.gamesPageNum
                case 'favorites':
                    return state.favoritesReducer.favoritesPageNum
                default:
                    return null
            }
        },
        getTotalPages() {
            switch (ownProps.type) {
                case 'books':
                    return state.booksReducer.booksTotalPages
                case 'films':
                    return state.filmsReducer.filmsTotalPages
                case 'serials':
                    return state.serialsReducer.serialsTotalPages
                case 'games':
                    return state.gamesReducer.gamesTotalPages
                case 'favorites':
                    return state.favoritesReducer.favoritesTotalPages
                default:
                    return null
            }
        },
        getPageType() {
            return ownProps.type
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPage(type, value) {
            switch (type) {
                case 'books':
                    dispatch(booksPageAC(value))
                    break;
                case 'films':
                    dispatch(filmsPageAC(value))
                    break;
                case 'serials':
                    dispatch(serialsPageAC(value))
                    break;
                case 'games':
                    dispatch(gamesPageAC(value))
                    break;
                case 'favorites':
                    dispatch(favoritesPageAC(value))
                    break;
                default:
                    return null
            }
        }
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(PaginationWrap)

export default PaginationContainer