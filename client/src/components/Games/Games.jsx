import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Games = (props) => {
    const {getPageNum, getGameThunk, getLoader, getGames} = props
    const page = getPageNum()
    useEffect(() => {
        getGameThunk(page)
    }, [page, getGameThunk])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getGames().map((item, key) => {
                        return <InfocardContainer key={key} type="games" info={item}/>
                    })}
                    <PaginationContainer type="games"/>
                </>
            }
        </>
    )
}