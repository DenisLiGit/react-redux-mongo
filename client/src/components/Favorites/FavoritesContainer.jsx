import {Favorites} from "./Favorites";
import {connect} from "react-redux";
import {getFavoriteThunk} from "../../redux/favoritesReducer";
import {loader} from "../../redux/selectors/generalSelectors";
import {
    favErrorMessage,
    favoritesPageNum,
    getFavorites,
    updateFavorites
} from "../../redux/selectors/favoritesSelectors";
import {userId} from "../../redux/selectors/usersSelectors";

const mapStateToProps = (state) => {
    return {
        favorites: getFavorites(state),
        update: updateFavorites(state),
        userId: userId(state),
        pageNum: favoritesPageNum(state),
        favErrorMessage: favErrorMessage(state),
        loader: loader(state)
    }
}

const FavoritesContainer = connect(mapStateToProps, {
    getFavoriteThunk
})(Favorites);

export default FavoritesContainer;