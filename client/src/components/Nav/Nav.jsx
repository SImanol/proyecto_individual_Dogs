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
    <div>
      <Link to="/home" onClick={handleHomeClick}>
        <p>HOME</p>
      </Link>
      <Link to="/about">
        <p>ABOUT</p>
      </Link>
      <Link to="/form">
        <p>NEW DOG</p>
      </Link>
    </div>
  );
};

export default Nav;