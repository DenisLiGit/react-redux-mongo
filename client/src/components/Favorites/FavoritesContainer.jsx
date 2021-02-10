import {Favorites} from "./Favorites";
import {connect} from "react-redux";
import {getFavoriteThunk, updateFavorites} from "../../redux/favoritesReducer";
import {loader} from "../../redux/selectors/generalSelectors";
import {favoritesPageNum, getFavorites} from "../../redux/selectors/favoritesSelectors";
import {userId} from "../../redux/selectors/usersSelectors";

const mapStateToProps = (state) => {
    return {
        favorites: getFavorites(state),
        update: updateFavorites(state),
        userId: userId(state),
        pageNum: favoritesPageNum(state),
        loader: loader(state)
    }
}

const FavoritesContainer = connect(mapStateToProps, {
    getFavoriteThunk
})(Favorites);

export default FavoritesContainer;