import { Link } from "react-router-dom";
const Landing = () => {
    return (
        <div>
            <h1>esta es la pagina Landing de inicio</h1>
            <Link to="/home">
            <button>Get Into</button>
            </Link>
        </div>
    )
};

export default Landing