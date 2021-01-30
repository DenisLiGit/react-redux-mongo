import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import {getFavoriteDataAction} from "../../action/Actions";
import {Loader} from "../Loader/Loader";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Favorites = (props) => {

    const {
        getFavorites,
        getPageNum,
        getLoader,
        actionSetFavorites,
        favoritesTotalPagesAC,
        loaderAC,
        update,
        favoritesUpdate
    } = props

    const page = getPageNum()
    useEffect(() => {
        loaderAC(true)
        getFavoriteDataAction(page).then(data => {
            actionSetFavorites(data.favorites)
            favoritesTotalPagesAC(data.pageCount)
            loaderAC(false)
            favoritesUpdate(false)
        })
    }, [
        page,
        actionSetFavorites,
        favoritesTotalPagesAC,
        loaderAC,
        update,
        favoritesUpdate
    ])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getFavorites('favorites') ?
                        getFavorites('favorites').map((item, key) => {
                            return <InfocardContainer key={key} info={item} type="favorites" />
                        }) : null}
                    <PaginationContainer type="favorites"/>
                </>
            }
        </>
    )
}