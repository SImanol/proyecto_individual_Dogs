import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { detailOfDog } from '../../redux/actions'
import { useEffect } from 'react';
import { Link } from "react-router-dom";


const DogsDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detail = useSelector((state) => state.detailDogs);;
    console.log(detail)

    useEffect(()=>{
        dispatch(detailOfDog(id));
       }, [dispatch, id])
       
    return(
            <div>
            <img src={detail.dog?.image || detail.dog?.image.url} alt="" />
            <div>
                <h1><b>ID: </b>{detail.dog?.id || detail.dog?.id}</h1>
                <h1><b>Name: </b>{detail.dog?.name}</h1>
                <h1><b>Height: </b>{detail.dog?.height}</h1>
                <h1><b>Weight: </b>{detail.dog?.weight}</h1>
                <h1><b>Temperaments: </b>{detail.dog?.temperament || detail.dog?.Temperaments.name}</h1>
                <h1><b>Life_Span: </b>{detail.dog?.life_span}</h1>
                <Link to= '/home'>
                <button>◄◄</button>
                </Link>
            </div>
            </div> 
    )
}

export default DogsDetails
