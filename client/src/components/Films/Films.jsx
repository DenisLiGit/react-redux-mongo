import React, {useEffect} from 'react'
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";

export const Films = (props) => {
    const {getPageNum, getFilmThunk, getLoader, getFilms} = props
    const page = getPageNum()
    useEffect(() => {
        getFilmThunk(page)
    }, [page, getFilmThunk])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getFilms().map((item, key) => {
                        return <InfocardContainer key={key} type="films" info={item}/>
                    })}
                    <PaginationContainer type="films"/>
                </>
            }
        </>
    )
}