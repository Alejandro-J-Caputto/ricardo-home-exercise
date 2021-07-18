import { Link } from "react-router-dom";
import logo from "../logo.svg";
const MainNav: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home-exercise"  className="logo__link">
          <img className="logo__svg" src={logo} alt="ricardo logo" />
        </Link>
      </div>
      <nav className="nav">
               {/* <ul className="nav-list">
                   <li className="nav-item"></li>
                   <li className="nav-item"></li>
                   <li className="nav-item"></li>
               </ul> */}
           </nav>
    </header>
  );
};

export default MainNav;
