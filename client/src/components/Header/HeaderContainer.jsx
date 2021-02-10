import {connect} from "react-redux";
import {Header} from "./Header";
import {isAuthenticated} from "../../redux/selectors/generalSelectors";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;