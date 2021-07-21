import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
const MainNav: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home-exercise" className="logo-link">
          <img className="logo__svg" src={logo} alt="ricardo logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <NavLink
            to="/home-exercise"
            activeClassName="active-link"
            className="nav-item"
            exact
          >
            <span>HOME</span>
          </NavLink>
          <NavLink
            to="/home-exercise/merkliste/saved"
            activeClassName="active-link"
            className="nav-item"
          >
            WHISHLIST
          </NavLink>
          {/* <button className="nav-item">THEME</button> */}
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
