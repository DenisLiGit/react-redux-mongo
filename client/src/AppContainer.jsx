import App from "./App";
import {connect} from "react-redux";
import {logUserIn} from "./redux/userReduser";

const mapStateToProps = (state) => {
    return { }
}

const AppContainer = connect(mapStateToProps, {
    logUserIn
})(App)

export default AppContainer