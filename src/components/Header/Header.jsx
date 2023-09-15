import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/LOGO(1).svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="" />
      <ul className="links">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/apropos">
          <li>A propos</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
