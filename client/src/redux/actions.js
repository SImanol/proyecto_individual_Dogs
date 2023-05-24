import {
 GET_DOGS,
 SEARCH_BY_NAME ,
 DOGS_DETAIL ,
 NEW_DOG, 
 GET_TEMPERAMENTS,
 NEXT_PAGE,
 PREV_PAGE,
 ORDER_DOGS,
 FILTER_DOGS_TEMPERAMENTS,
 FILTER_BY_ORIGIN,
 CLEAN_DETAIL} from './actions-types'

 import axios from "axios";

export const  getAllDogs = () => {
    return async  (dispatch) => {
            let response = await axios.get('http://localhost:3001/dogs')
            console.log(response)
            return dispatch({
                type: GET_DOGS,
                payload: response.data
            })
    }
    
    }

export const searchDogsByName = (name) => {
    return async (dispatch) =>{
            const response = await axios.get(`http://localhost:3001/dogs/name?name=${name}`)
            return dispatch({type: SEARCH_BY_NAME, payload: response.data}) 
        };
    
    }

export const detailOfDog = (id) => {
    return async  (dispatch) => {
            let response = await axios.get(`http://localhost:3001/dogs/${id}`)
            console.log(response.data)
            return dispatch({type: DOGS_DETAIL, payload: response.data})
    }
}

export const createNewDog = (formData) => {
    return async (dispatch) => {
        const {image, name, heightMin, heightMax, weightMin, weightMax, life_span, temperament} = formData
        const dogCreated = {name: name, image: image, height:`${heightMin} - ${heightMax}`, weight:`${weightMin} - ${weightMax}`, life_span: life_span, temperament: temperament}
        const response = await axios.post('http://localhost:3001/dogs', dogCreated);
        const newDog = response.data;
        console.log(newDog);
        return dispatch({ type: NEW_DOG, payload: newDog })
    };
  };

export const getTemperament = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/temperaments')
            const temperaments = response.data
            return dispatch({type: GET_TEMPERAMENTS, payload: temperaments})
        } catch (error) {
            console.log(error)
        }
    }
}

export const nextPage = () => {
    return {type: NEXT_PAGE}
}

export const prevPage = () => {
    return {type: PREV_PAGE}
}

export const orderDogs = (orderOptions) => {
    return { type:ORDER_DOGS, payload: {orderOptions}}
}

export const filterByTemperaments = (payload) => {
    console.log(payload)
    return {type: FILTER_DOGS_TEMPERAMENTS, payload}
}

export const filterByData = (payload) => {
    return {type: FILTER_BY_ORIGIN, payload}
}
export const clearDetailDog = () => {
    return {
      type: CLEAN_DETAIL,
    };
  };