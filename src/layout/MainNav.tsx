import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { toggleTheme } from "../redux/actions/uiActions";
import { useAppDispatch } from "../redux/hooks";
import { RootState } from "../redux/store/store";
const MainNav: React.FC = () => {
  const setTheme = useAppDispatch();
  const themeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btn = event.target as HTMLButtonElement;
    btn.classList.toggle("dark");
    setTheme(toggleTheme());
  };
  const UI =  useSelector((state:RootState) => state.uiLoading);

  const {uiTheme} = UI;

  return (
    <header className={`header ${uiTheme && "dark"}` }>
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
            <i className="fas fa-home"></i>
          </NavLink>
          <NavLink
            to="/home-exercise/merkliste/saved"
            activeClassName="active-link"
            className="nav-item"
          >
            <i className="fas fa-flag"></i>
          </NavLink>
          <div className="nav-item btn-theme">
            <i className="fas fa-sun sunny"></i>
            <i className="fas fa-moon"></i>
            <button onClick={themeHandler}></button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
