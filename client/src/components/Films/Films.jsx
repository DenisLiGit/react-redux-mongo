import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";

export const Films = (props) => {
    const {pageNum, getFilmThunk, loader, films} = props
    useEffect(() => {
        getFilmThunk(pageNum)
    }, [pageNum, getFilmThunk])

    return (
        <>
            {loader ?
                <Loader/>
                :
                <>
                    {films.map((item, key) => {
                        return <InfocardContainer key={key} type="films" info={item}/>
                    })}
                    <PaginationContainer type="films"/>
                </>
            }
        </>
    )
}