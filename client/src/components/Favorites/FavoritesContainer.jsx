import {Favorites} from "./Favorites";
import {connect} from "react-redux";
import {loaderAC} from "../../redux/contentReducer";
import {actionSetFavorites, favoritesTotalPagesAC, favoritesUpdate} from "../../redux/favoritesReducer";

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
    actionSetFavorites,
    favoritesTotalPagesAC,
    loaderAC,
    favoritesUpdate
})(Favorites);

export default FavoritesContainer;