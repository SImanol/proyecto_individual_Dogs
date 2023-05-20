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
    <div>
        <label>Order BY: </label>
        <select value={orderOption} onChange={handleSort}>
            <option value='' >Sort BY</option>
            <option value="weight_desc"> peso menor a mayor </option>
            <option value="weight_asc"> peso mayor a menor </option>
            <option value="name_asc"> nombre(a-z) </option>
            <option value="name_desc"> nombre(z-a) </option>
        </select>
<br/>
        <label>FILTER BY: </label>
        <select onChange={handlerFilteredByTemps}>
            <option value='temperaments'>All Temperaments</option>
            {temps.map(temp => (
            <option key={temp.name} value={temp.name}>{temp.name}</option>
            ))}
        </select>   

        <select onChange={handlerFilteredByOrigin}>
            <option value='All'>All Origins</option>
            <option value='API'>default Dogs</option>
            <option value=''> created dogs</option>
        </select>
    </div>
)
}

export default Order