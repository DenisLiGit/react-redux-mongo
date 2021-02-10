import {connect} from "react-redux";
import {Sidebar} from "./Sidebar";
import {isAuthenticated} from "../../redux/selectors/generalSelectors";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: isAuthenticated(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;