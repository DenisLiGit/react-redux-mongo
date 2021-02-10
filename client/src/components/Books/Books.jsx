import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";

export const Books = (props) => {
    const {pageNum, getBookThunk, loader, books} = props
    useEffect(() => {
        getBookThunk(pageNum)
    }, [pageNum, getBookThunk])

    return (
        <>
            {loader ?
                <Loader/>
                :
                <>
                    {books.map((item, key) => {
                        return <InfocardContainer key={key} type="books" info={item}/>
                    })}
                    <PaginationContainer type="books"/>
                </>
            }
        </>
    )
}