import {Books} from "./Books";
import {connect} from "react-redux";
import {getBookThunk} from "../../redux/booksReducer";
import AuthRedirect from '../../Hoc/AuthRedirect'
import {compose} from "redux";

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
        },
        isAuthenticated: state.userReduser.userInfo.isAuthenticated
    }
}

export default compose(
    connect(mapStateToProps, {getBookThunk}),
    AuthRedirect
)(Books);