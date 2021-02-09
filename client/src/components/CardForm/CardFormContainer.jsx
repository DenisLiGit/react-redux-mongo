import CardItem from "./CardForm";
import {connect} from "react-redux";
import {cardTypeAC, createFavoriteThunk} from "../../redux/cardReducer";

const mapStateToProps = (state) => {
    return {
        janraOptions: state.favoritesReducer.customFavorites.janraOptions,
        cardType: state.cardReducer.cardType
    }
}

const CardFormContainer = connect(mapStateToProps, {
    createFavoriteThunk,
    cardTypeAC
})(CardItem);

export default CardFormContainer;