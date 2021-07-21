import { NavLink } from "react-router-dom";

const NavArticles: React.FC = () => {
  return (
    <nav className="merkliste-nav">
      <ul className="merkliste-nav__list">
        <NavLink
          activeClassName="active-link"
          className="merkliste-nav__list-item"
          to="/home-exercise/merkliste/saved"
        >
          <span>ARTICLES</span>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          className="merkliste-nav__list-item"
          to="/home-exercise/merkliste/visited"
        >
          <span>VISITED</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavArticles;
