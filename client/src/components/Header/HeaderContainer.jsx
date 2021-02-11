import {connect} from "react-redux";
import {Header} from "./Header";
import {isAuthenticated} from "../../redux/selectors/generalSelectors";
import {logoutUserThunk} from "../../redux/userReduser";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

const HeaderContainer = connect(mapStateToProps, {logoutUserThunk})(Header);

export default HeaderContainer;