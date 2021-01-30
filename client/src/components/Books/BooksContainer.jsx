import {Books} from "./Books";
import {connect} from "react-redux";
import {loaderAC} from "../../redux/contentReducer";
import {booksTotalPagesAC, setBookDataAC} from "../../redux/booksReducer";

const mapStateToProps = (state) => {
    return {
        getBooks: () => {
            return state.booksReducer.books
        },
        getPageNum: () => {
            return state.booksReducer.booksPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        }
    }
}

const BooksContainer = connect(mapStateToProps, {
    setBookDataAC,
    booksTotalPagesAC,
    loaderAC
})(Books);

export default BooksContainer;