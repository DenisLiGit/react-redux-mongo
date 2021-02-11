import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import {Loader} from "../Loader/Loader";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Favorites = (props) => {
    const {pageNum, getFavoriteThunk, loader, favorites, userId, update, favErrorMessage} = props
    useEffect(() => {
        getFavoriteThunk(pageNum, userId)
    }, [pageNum, getFavoriteThunk, userId, update, favErrorMessage])

    return (
        <>
            {favErrorMessage ?
                <h3> {favErrorMessage} </h3>
                :
                loader ?
                    <Loader/>
                    :
                    <>
                        {favorites ?
                            favorites.map((item, key) => {
                                return <InfocardContainer key={key} info={item} type="favorites"/>
                            }) : null}
                        <PaginationContainer type="favorites"/>
                    </>
            }
        </>
    )
}