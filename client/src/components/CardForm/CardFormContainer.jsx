import {
    actionCreateCustomBook,
    actionSetName,
    actionSetAuthor,
    actionSetJanra,
    actionSetDescr, actionClearCustomBook,
} from '../../redux/favoritesReducer';
import {CardForm} from "./CardForm";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        data: state.favoritesReducer.customFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        cardActions: {
            setName (e) {
                const action = actionSetName(e.target.value)
                dispatch(action)
            },
            setAuthor (e) {
                const action = actionSetAuthor(e.target.value)
                dispatch(action)
            },
            setJanra (e) {
                const action = actionSetJanra(e.target.value)
                dispatch(action)
            },
            setDiscr (e) {
                const action = actionSetDescr(e.target.value)
                dispatch(action)
            },
            handleSubmit (e) {
                e.preventDefault();
                dispatch(actionCreateCustomBook())
                dispatch(actionClearCustomBook())
            }
        }
    }
}

const CardFormContainer = connect(mapStateToProps, mapDispatchToProps)(CardForm);

export default CardFormContainer;