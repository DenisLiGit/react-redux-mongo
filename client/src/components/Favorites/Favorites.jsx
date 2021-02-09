import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import {Loader} from "../Loader/Loader";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Favorites = (props) => {
    const {getPageNum, getFavoriteThunk, getLoader, getFavorites, update, userid} = props
    const page = getPageNum()
    useEffect(() => {
        getFavoriteThunk(page, userid)
    }, [page, getFavoriteThunk, update, userid])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getFavorites('favorites') ?
                        getFavorites('favorites').map((item, key) => {
                            return <InfocardContainer key={key} info={item} type="favorites"/>
                        }) : null}
                    <PaginationContainer type="favorites"/>
                </>
            }
        </>
    )
}