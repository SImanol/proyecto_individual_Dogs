import './pagintion.css'
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
        <div className='paginate'>
            {
                currentPage > 1 ?
                <>
                    <button onClick={prev}> PREV </button>
                    <label>{currentPage - 1}</label>
                </> : null
            }
           
            <span>{currentPage}</span>
            
            {
                currentPage < cantPage ? 
                <>
                <label>{currentPage  + 1}</label>
                <button onClick={next}> NEXT </button>
                </> : null
            }
            
        </div>
    )
};

export default Pagination