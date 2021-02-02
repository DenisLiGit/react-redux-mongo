import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";

export const Books = (props) => {
    const {getPageNum, getBookThunk, getLoader, getBooks} = props
    const page = getPageNum()
    useEffect(() => {
        getBookThunk(page)
    }, [page, getBookThunk])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getBooks().map((item, key) => {
                        return <InfocardContainer key={key} type="books" info={item}/>
                    })}
                    <PaginationContainer type="books"/>
                </>
            }
        </>
    )
}