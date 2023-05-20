import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../../redux/actions";

const Pagination = ({cantPage}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.numPage);
     
    const next = () => {
        dispatch(nextPage())
    }
    const prev = () => {
        dispatch(prevPage())
    }

    return (
        <>
            {
                currentPage > 1 ?
                <>
                    <button onClick={prev}> PREV </button>
                    <p>{currentPage - 1}</p>
                </> : null
            }
            
            <h3>{currentPage}</h3>

            {
                currentPage < cantPage ? 
                <>
                <p>{currentPage  + 1}</p>
                <button onClick={next}> NEXT </button>
                </> : null
            }
            
        </>
    )
};

export default Pagination