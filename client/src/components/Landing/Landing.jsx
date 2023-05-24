import { Link } from "react-router-dom";
import './Landing.css'
import logo from '../../image/dibujos-animados-divertido-perro-mascota-vector-ilustracion-caracter-concepto-animal-icono-aislado_737376-215.avif'    

const Landing = () => {
    return (
        <div className="landing">
            <h1>HENRY!</h1>
            <h1>The house of Dogs!!</h1>
            <Link to="/home">
            <img src={logo} alt="" />
            {/* <button>Get Into</button> */}
            </Link>
            <br/>
            <h4>by: Imanol Suarez</h4>
        </div>
    )
};

export default Landing