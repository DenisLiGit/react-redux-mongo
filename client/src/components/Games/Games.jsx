import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Games = (props) => {
    const {pageNum, getGameThunk, loader, games} = props
    useEffect(() => {
        getGameThunk(pageNum)
    }, [pageNum, getGameThunk])

    return (
        <>
            {loader ?
                <Loader/>
                :
                <>
                    {games.map((item, key) => {
                        return <InfocardContainer key={key} type="games" info={item}/>
                    })}
                    <PaginationContainer type="games"/>
                </>
            }
        </>
    )
}