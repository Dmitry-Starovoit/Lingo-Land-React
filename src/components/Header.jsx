import "./Header.css";
import logo from "../assets/logo-header.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = function () {
  return (
    <div className="header">
      <div className="header__content">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <ul className="nav">
          <li className="nav__item">
            <Link to="/">About us</Link>
          </li>
          <li className="nav__item">
            <Link to="/vocabulary">Vocabulary</Link>
          </li>
          <li className="nav__item">
            <Link to="/news">News</Link>
          </li>
          <li className="nav__item">
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="nav__item">
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
