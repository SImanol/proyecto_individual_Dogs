import './Order.css'
import { useDispatch, useSelector } from 'react-redux';
import { orderDogs, filterByTemperaments, getTemperament, filterByData} from '../../redux/actions'
import { useState, useEffect } from 'react';

const Order = () => {
const dispatch = useDispatch();
const [orderOption, setOrderOption] = useState('')
const temps = useSelector(state => state.temperaments)

useEffect(() => {
    dispatch(getTemperament());
  }, [dispatch]);


const handleSort = (event) => {
    const selectOption = event.target.value;
    setOrderOption(selectOption)
  dispatch(orderDogs(selectOption));
};

const handlerFilteredByTemps = (event) => {
    const selectedTemperament = event.target.value;
    dispatch(filterByTemperaments(selectedTemperament));
  };
  const handlerFilteredByOrigin = (event) => {
    const origin = event.target.value;
    dispatch(filterByData(origin));
  };
return(
    <div className='orderfilter'>
        <label>Order:  </label>
        <select value={orderOption} onChange={handleSort} className='select'>
            <option value='' >Order By</option>
            <option value="weight_desc"> weight (desc) </option>
            <option value="weight_asc"> weight (asc) </option>
            <option value="name_asc"> name(a-z) </option>
            <option value="name_desc"> name(z-a) </option>
        </select>
        <label> filter:  </label>
        <select onChange={handlerFilteredByTemps} className='select'>
            <option value='temperaments'>Temperaments</option>
            <option value='temperaments'>All Temperaments</option>
            {temps.map(temp => (
            <option key={temp.name} value={temp.name}>{temp.name}</option>
            ))}
        </select>

        <select onChange={handlerFilteredByOrigin} className='select'>
            <option value='' >Origin</option>
            <option value='All'>All Origins</option>
            <option value='API'>default Dogs</option>
            <option value=''> created dogs</option>
        </select>
    </div>
)
}

export default Order