import { Link } from 'react-router-dom'

const Card = ({ id, image, name, temperament, weight }) => {
    return(
        <div>
            <div>
            <Link to={`/${id}`}>
            <h2>{name}</h2>
            </Link>
            <img src={image} alt=''/>
            <h2><b>Temperaments: </b>{temperament}</h2>
            <h2><b>Weight: </b>{weight} kg</h2>
            </div>
        </div>
    )
}

export default Card