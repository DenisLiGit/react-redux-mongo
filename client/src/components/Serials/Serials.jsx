import React, {useEffect} from 'react'
import {Loader} from "../Loader/Loader";
import InfocardContainer from "../Infocard/InfocardContainer";
import PaginationContainer from "../Pagination/PaginationContainer";

export const Serials = (props) => {
    const {pageNum, getSerialThunk, loader, serials} = props
    useEffect(() => {
        getSerialThunk(pageNum)
    }, [pageNum, getSerialThunk])


    return (
        <>
            {loader ?
                <Loader/>
                :
                <>
                    {serials.map((item, key) => {
                        return <InfocardContainer key={key} type="serials" info={item}/>
                    })}
                    <PaginationContainer type="serials"/>
                </>
            }
        </>
    )
}