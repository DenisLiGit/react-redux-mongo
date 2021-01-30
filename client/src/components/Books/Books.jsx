import React, {useEffect} from 'react'

import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";
import {getBookDataAction} from "../../action/Actions";

export const Books = (props) => {
    const {
        booksTotalPagesAC,
        getBooks,
        getLoader,
        getPageNum,
        loaderAC,
        setBookDataAC
    } = props

    const page = getPageNum()
    useEffect(() => {
        loaderAC(true)
        getBookDataAction(page).then(data => {
            setBookDataAC(data.books)
            booksTotalPagesAC(data.pageCount)
            loaderAC(false)
        })
    }, [page, setBookDataAC, booksTotalPagesAC, loaderAC])


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