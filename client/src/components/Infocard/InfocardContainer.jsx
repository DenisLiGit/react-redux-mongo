import {Infocard} from "./Infocard";
import {connect} from "react-redux";
import {favoritesUpdate} from "../../redux/favoritesReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        data: ownProps.info,
        type: ownProps.type,
    }
}

const InfocardContainer = connect(mapStateToProps, {
    favoritesUpdate
})(Infocard)

export default InfocardContainer