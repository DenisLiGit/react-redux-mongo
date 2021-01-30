import React, {useEffect} from 'react'

import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {Loader} from "../Loader/Loader";
import {getFilmDataAction} from "../../action/Actions";

export const Films = (props) => {
    const {
        getFilms,
        getPageNum,
        getLoader,
        setFilmDataAC,
        filmsTotalPagesAC,
        loaderAC
    } = props
    const page = getPageNum()
    useEffect(() => {
        loaderAC(true)
        getFilmDataAction(page).then(data => {
            setFilmDataAC(data.films)
            filmsTotalPagesAC(data.pageCount)
            loaderAC(false)
        })
    }, [page, setFilmDataAC, filmsTotalPagesAC, loaderAC])

    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getFilms().map((item, key) => {
                            return <InfocardContainer key={key} type="films" info={item}/>
                    })}
                    <PaginationContainer type="films" />
                </>
            }
        </>
    )
}