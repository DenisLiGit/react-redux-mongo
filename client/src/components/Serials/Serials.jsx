import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Serials = (props) => {
    const {getPageNum, getSerialThunk, getLoader, getSerials} = props
    const page = getPageNum()
    useEffect(() => {
        getSerialThunk(page)
    }, [page, getSerialThunk])


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