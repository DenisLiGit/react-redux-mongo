import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";
import {getSerialDataAction} from "../../action/Actions";

export const Serials = (props) => {
    const {
        getSerials,
        getPageNum,
        getLoader,
        setSerialDataAC,
        serialsTotalPagesAC,
        loaderAC
    } = props

    const page = getPageNum()
    useEffect(() => {
        loaderAC(true)
        getSerialDataAction(page).then(data => {
            setSerialDataAC(data.serials)
            serialsTotalPagesAC(data.pageCount)
            loaderAC(false)
        })
    }, [page, setSerialDataAC, serialsTotalPagesAC, loaderAC])


    return (
        <>
            {getLoader() ?
                <Loader/>
                :
                <>
                    {getSerials().map((item, key) => {
                        return <InfocardContainer key={key} type="serials" info={item}/>
                    })}
                    <PaginationContainer type="serials"/>
                </>
            }
        </>
    )
}