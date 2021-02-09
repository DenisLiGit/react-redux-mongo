import App from "./App";
import {connect} from "react-redux";
import {userLogIn} from "./redux/userReduser";

const mapStateToProps = (state) => {
    return { }
}

const AppContainer = connect(mapStateToProps, {
    userLogIn
})(App)

export default AppContainer