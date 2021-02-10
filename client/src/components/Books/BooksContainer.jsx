import {Books} from "./Books";
import {connect} from "react-redux";
import {getBookThunk} from "../../redux/booksReducer";
import AuthRedirect from '../../Hoc/AuthRedirect'
import {compose} from "redux";
import {isAuthenticated, loader} from "../../redux/selectors/generalSelectors";
import {booksPageNum, getBooksS} from "../../redux/selectors/booksSelectors";

const mapStateToProps = (state) => {
    return {
        books: getBooksS(state),
        pageNum: booksPageNum(state),
        loader: loader(state),
        isAuthenticated: isAuthenticated(state)
    }
}

export default compose(
    connect(mapStateToProps, {getBookThunk}),
    AuthRedirect
)(Books);