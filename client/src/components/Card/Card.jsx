import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ id, image, name, temperament, weight }) => {
    return(
        <div class='all'>
            <div className="card">
            <Link to={`/${id}`}>
            <h2 class='cardName'>{name}</h2>
            
            <img src={image} alt=''/>
            <h2 className='weight'><b>Weight: </b>{weight} kg</h2>
            <br/>
            <h2 className='temp'><b>It's: </b>{temperament}</h2>
            </Link>
            </div>
        </div>
    )
}

export default Card