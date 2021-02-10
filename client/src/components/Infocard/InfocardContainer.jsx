import {Infocard} from "./Infocard";
import {connect} from "react-redux";
import {deleteFavoriteThunk, setFavoriteThunk} from "../../redux/favoritesReducer";
import {userId} from "../../redux/selectors/usersSelectors";

const mapStateToProps = (state, ownProps) => {
    return {
        data: ownProps.info,
        userId: userId(state)
    }
}

const InfocardContainer = connect(mapStateToProps, {
    deleteFavoriteThunk, setFavoriteThunk
})(Infocard)

export default InfocardContainer