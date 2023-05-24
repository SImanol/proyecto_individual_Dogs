import SearchBar from '../SearchBar/SearchBar';
import './Nav.css'
import { Link, useLocation } from "react-router-dom";

const Nav = (props) => {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname !== "/home") {
      window.location.href = "/home";
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='search'>
      <Link to="/home" onClick={handleHomeClick}>
        <button className='buttonHome'>🏠</button>
      </Link>
      <Link to="/form">
        <button className='buttonNew'>New 🐶</button>
      </Link>
      {location.pathname ==='/home' && <SearchBar/> }
    </div>
  );
};

export default Nav;