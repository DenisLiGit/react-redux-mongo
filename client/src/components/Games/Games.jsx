import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {getGameDataAction} from "../../action/Actions";

export const Games = (props) => {
    const {
        getGames,
        getPageNum,
        getLoader,
        setGameDataAC,
        gamesTotalPagesAC,
        loaderAC
    } = props

    const page = getPageNum()
    useEffect(() => {
        loaderAC(true)
        getGameDataAction(page).then(data => {
            setGameDataAC(data.games)
            gamesTotalPagesAC(data.pageCount)
            loaderAC(false)
        })
    }, [page, setGameDataAC, gamesTotalPagesAC, loaderAC])


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