import video from "../../../assets/the-lion-king.mp4";
import poster from "../../../assets/poster.jpg";
import img from "../../../assets/logo-workbook.png";
import exit from "../../../assets/exit-workbook.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./HeaderPage.css";
import Profile from "../Profile/Profile";
const HeaderPage = (props) => {
  return (
    <>
      <div className="workbook__header">
        <div className="workbook__header--content">
          <div className="workbook__left">
            <img className="header__logo--workbook" src={img} alt="" />
            <h1 className="header__text--workbook">Workbook - Lion King</h1>
          </div>
          <div className="workbook__right">
            {props.isLoggedIn && <Profile userName={props.userName} />}
            <Link to="/">
              <img className="header__exit--workbook" src={exit} alt="" />
            </Link>
          </div>
        </div>
      </div>
      {props.isLoggedIn && (
        <div className="header__workbook">
          <h1>Workbook "The Lion King"</h1>
          <h4>
            With our workbook, you will learn to put words in the appropriate
            tense, begin to understand English words and sentences by ear, and
            improve your English skills.
          </h4>
          <video controls src={video} poster={poster}></video>
        </div>
      )}
    </>
  );
};

export default HeaderPage;
