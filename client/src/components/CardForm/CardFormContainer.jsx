import CardItem from "./CardForm";
import {connect} from "react-redux";
import {cardTypeAC, createFavoriteThunk} from "../../redux/cardReducer";
import {cardType, genreOptions} from "../../redux/selectors/cardSelectors";

const mapStateToProps = (state) => {
    return {
        genreOptions: genreOptions(state),
        cardType: cardType(state)
    }
}

const CardFormContainer = connect(mapStateToProps, {
    createFavoriteThunk,
    cardTypeAC
})(CardItem);

export default CardFormContainer;