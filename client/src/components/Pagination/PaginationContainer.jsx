import PaginationWrap from './Pagination'
import {connect} from "react-redux";
import {booksPageAC} from "../../redux/booksReducer";
import {filmsPageAC} from "../../redux/filmsReducer";
import {serialsPageAC} from "../../redux/serialsReducer";
import {gamesPageAC} from "../../redux/gamesReducer";
import {favoritesPageAC} from "../../redux/favoritesReducer";
import {booksPageNum, booksTotalPages} from "../../redux/selectors/booksSelectors";
import {filmsPageNum, filmsTotalPages} from "../../redux/selectors/filmsSelectors";
import {serialsPageNum, serialsTotalPages} from "../../redux/selectors/serialsSelectors";
import {gamesPageNum, gamesTotalPages} from "../../redux/selectors/gamesSelectors";
import {favoritesPageNum, favoritesTotalPages} from "../../redux/selectors/favoritesSelectors";

const mapStateToProps = (state, ownProps) => {
    return {
        getPage() {
            switch (ownProps.type) {
                case 'books':
                    return booksPageNum(state)
                case 'films':
                    return filmsPageNum(state)
                case 'serials':
                    return serialsPageNum(state)
                case 'games':
                    return gamesPageNum(state)
                case 'favorites':
                    return favoritesPageNum(state)
                default:
                    return null
            }
        },
        getTotalPages() {
            switch (ownProps.type) {
                case 'books':
                    return booksTotalPages(state)
                case 'films':
                    return filmsTotalPages(state)
                case 'serials':
                    return serialsTotalPages(state)
                case 'games':
                    return gamesTotalPages(state)
                case 'favorites':
                    return favoritesTotalPages(state)
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