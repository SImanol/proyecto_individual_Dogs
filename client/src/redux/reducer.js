import { GET_DOGS, SEARCH_BY_NAME, DOGS_DETAIL, NEW_DOG, GET_TEMPERAMENTS, NEXT_PAGE, PREV_PAGE, ORDER_DOGS, FILTER_DOGS_TEMPERAMENTS, FILTER_BY_ORIGIN } from './actions-types'

const initialState = {
  dogs: [],
  filterDogs: [],
  originDogs: [],
  allDogs:[],
  detailDogs: {},
  temperaments: [],
  newDog: "",
  numPage: 1,
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: payload,
        allDogs:payload,
        filterDogs:payload,
        originDogs:payload
      }
      case SEARCH_BY_NAME:
        return {
          ...state,
        dogs: payload,
        }
        case NEW_DOG:
          return {
            ...state,
            newDog: payload,
          }
    case DOGS_DETAIL:
      return {
        ...state,
        detailDogs: payload,
      }
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: payload,
      }
    case NEXT_PAGE:
      return{
        ...state,
        numPage: state.numPage + 1
      }

      case PREV_PAGE:
      return{
        ...state,
        numPage: state.numPage - 1
      }

      case ORDER_DOGS: 
      const {orderOptions} = payload
      let orderDogs 
      if(orderOptions === 'weight_desc'){
        orderDogs = [...state.dogs].sort((a,b) => 
        a.weight.localeCompare(b.weight)
        )
      } else if(orderOptions === 'weight_asc') {
        orderDogs = [...state.dogs].sort((a,b) =>
        b.weight.localeCompare(a.weight)
        )
      }else if(orderOptions === 'name_asc'){
        orderDogs = [...state.dogs].sort((a,b) => 
        a.name.localeCompare(b.name)
      )
      }else if(orderOptions === 'name_desc'){
      orderDogs = [...state.dogs].sort((a,b) => 
      b.name.localeCompare(a.name)
    )
    }
      else {
        orderDogs = [...state.dogs]
      }
      return {
          ...state,
          dogs: orderDogs
      }

      case FILTER_DOGS_TEMPERAMENTS:
        if (payload === "temperaments") {
          return {
            ...state,
            dogs: [...state.allDogs],
          }; 
        }else {
          const tempFilter = state.filterDogs.filter(dog => {
            if (dog && dog.temperament) {
              const temperaments = dog.temperament.split(',').map(item => item.trim());
              return temperaments.includes(payload);
            }
          });
          return {
            ...state,
            dogs: tempFilter
          };
        } 

      case FILTER_BY_ORIGIN: 
      const allDogs = [...state.allDogs]
      let dogsFiltered = []
      if(payload === 'All'){
        dogsFiltered = allDogs
      }else if(payload === 'API'){
        allDogs.forEach(dog => {
          if(typeof(dog.id) === 'number') {
            dogsFiltered.push(dog);
          }
        })
      }else {
        allDogs.forEach(dog => {
          if(typeof(dog.id) === 'string') {
            dogsFiltered.push(dog); 
          }
        })
      }
      return{
        ...state,
        dogs: dogsFiltered
      }
    default:
      return state
  }
}

export default reducer