import './detail.css'
import { useParams } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { detailOfDog, clearDetailDog } from '../../redux/actions'
import { useEffect } from 'react';
import { Link } from "react-router-dom";

const DogsDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const detail = useSelector((state) => state.detailDogs);;
    console.log(detail)

    useEffect(()=>{
        dispatch(detailOfDog(id));
    return () => {
      dispatch(clearDetailDog());
    };
  }, [dispatch, id]);
       
    return(
            <div className="detail">
                <h1 className='title'>{detail.dog?.name}</h1>
            <img src={detail.dog?.image || detail.dog?.image.url} alt="" className='img'/>
            
                <h1 className='info'><b className='subtitle'>ID: </b>{detail.dog?.id || detail.dog?.id}</h1>
                
                <h1 className='info'><b className='subtitle'>Height: </b>{detail.dog?.height} cm</h1>
                <h1 className='info'><b className='subtitle'>Weight: </b>{detail.dog?.weight} kg</h1>
                <h1 className='info'><b className='subtitle'>Temperaments: </b>{detail.dog?.temperament || detail.dog?.Temperaments.name}</h1>
                <h1 className='info'><b className='subtitle'>Life_Span: </b>{detail.dog?.life_span}</h1>
                <Link to= '/home'>
                <button className='buttondetail'>◄◄</button>
                </Link>
           
            </div> 
    )
}

export default DogsDetails
