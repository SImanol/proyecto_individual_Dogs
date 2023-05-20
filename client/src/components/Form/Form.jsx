import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {validate} from "../validation";
import {createNewDog} from "../../redux/actions";
import Card from "../Card/Card";
import Multilist from '../Multilist/multilist.jsx'


const Form = () => {
  const dispatch = useDispatch();
  const imageDefault = 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';
  const [formData, setFormData] = useState({ 
    name: '', 
    image: '',
    heightMin: 0,
    heightMax: 0,
    weightMin:0,
    weightMax:0,
    life_span:0,
    temperament:"[]",
  });
  const [errors, setErrors] = useState({ 
    name: '', 
    image: '',
    heightMin: '',
    heightMax: '',
    weightMin:'',
    weightMax:'',
    life_span:'',
    temperament:'',
  });
  const handleInputChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
    setErrors(validate({...formData}))
  };

  useEffect(() =>{
    setFormData(formData);
    setErrors(validate(formData));

  }, [formData]);

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(Object.keys(errors).length === 0){
      dispatch(createNewDog(formData));
      alert('the dog was created successfully')
      setFormData({
        name: '', 
        image: '',
        heightMin: 0,
        heightMax: 0,
        weightMin:0,
        weightMax:0,
        life_span:0,
        temperament:[],
      })
    };}

  const setInFormTemperaments = (temp) => {
    setFormData({...formData, temperament: temp})
  };

console.log(formData)

  return(
    <div className="form">
      <form className="create" onSubmit={handleSubmit}>
        <h3>ADD NEW DOG:</h3>
        <label>Name of Breeds: </label>
        <input name="name" type="text" value={formData.name} onChange={handleInputChange}></input>
        {errors.name? <p>{errors.name}</p> : <p> </p>}
      
        <label>Image: </label>
        <input name="image" type="text" value={formData.image} onChange={handleInputChange}></input>
        {errors.image? <p>{errors.image}</p> : <p> </p>}
      
        <label>Height: </label>
        <br/>
        <label>min: </label>
        <input className = "number" name="heightMin" type="number" value={formData.heightMin} onChange={handleInputChange}></input>
        <span> cm</span>
        <label>  -  max: </label>
        <input className = "number" name="heightMax" type="number" value={formData.heightMax} onChange={handleInputChange}></input>
        <span> cm</span>
        {errors.heightMin? <p>{errors.heightMin}</p> : errors.heightMax? <p>{errors.heightMax}</p> : <p> </p>}

        <label>Weight:</label>
        <br/>
        <label>min: </label>
        <input className = "number" name="weightMin" type="number" value={formData.weightMin} onChange={handleInputChange}></input>
        <span> kg</span>
        <label>  -  max: </label>
        <input className = "number" name="weightMax" type="number" value={formData.weightMax} onChange={handleInputChange}></input>
        <span> kg</span>
        {errors.weightMin? <p>{errors.weightMin}</p>: errors.weightMax? <p>{errors.weightMax}</p>: <p> </p>}

        <label>Life span: </label>
        <input className = "number" name="life_span" type="number" value={formData.life_span} onChange={handleInputChange} ></input>
        {errors.life_span? <p>{errors.life_span}</p>  : <p> </p>}

        <label>Temperaments: </label>
         <Multilist setInFormTemperaments={setInFormTemperaments} /> 
        <br/>
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        <Card
        key = 'prev'
        id = {undefined}
        name = {formData.name}
        temperament = {formData.temperament}
        weight = {`${formData.weightMin} - ${formData.weightMax}`}
        image = {formData.image? formData.image: imageDefault }
        />
        </div>
    </div>
  )
};

export default Form ;