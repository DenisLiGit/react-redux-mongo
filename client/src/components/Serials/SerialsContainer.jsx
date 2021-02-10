import {Serials} from "./Serials";
import {connect} from "react-redux";
import {getSerialThunk} from "../../redux/serialsReducer";
import {compose} from "redux";
import AuthRedirect from "../../Hoc/AuthRedirect";
import {isAuthenticated, loader} from "../../redux/selectors/generalSelectors";
import {getSerials, serialsPageNum} from "../../redux/selectors/serialsSelectors";

const mapStateToProps = (state) => {
    return {
        serials: getSerials(state),
        pageNum: serialsPageNum(state),
        loader: loader(state),
        isAuthenticated: isAuthenticated(state)
    }
}

export default compose(
    connect(mapStateToProps, {getSerialThunk}),
    AuthRedirect
)(Serials)