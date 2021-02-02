import {Favorites} from "./Favorites";
import {connect} from "react-redux";
import {getFavoriteThunk} from "../../redux/favoritesReducer";

const mapStateToProps = (state) => {
    return {
        getFavorites: () => {
            return state.favoritesReducer.favorites
        },
        getPageNum: () => {
            return state.favoritesReducer.favoritesPageNum
        },
        getLoader: () => {
            return state.contentReducer.loader
        },
        update: state.favoritesReducer.update
    }
}

const FavoritesContainer = connect(mapStateToProps, {
    getFavoriteThunk
})(Favorites);

export default FavoritesContainer;