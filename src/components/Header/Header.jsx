import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ name }) => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h2>{name}</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/employees">Employees</NavLink>
          </li>

          <li>
            <NavLink to="/add">New Employee</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
