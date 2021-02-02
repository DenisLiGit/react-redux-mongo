import {Infocard} from "./Infocard";
import {connect} from "react-redux";
import {deleteFavoriteThunk, setFavoriteThunk} from "../../redux/favoritesReducer";

const mapStateToProps = (state, ownProps) => {
    return {
        data: ownProps.info,
        type: ownProps.type,
    }
}

const InfocardContainer = connect(mapStateToProps, {
    deleteFavoriteThunk, setFavoriteThunk
})(Infocard)

export default InfocardContainer