import "./QuizHeader.css";
import img from "../../../assets/logo-quiz.png";
import exit from "../../../assets/exit-quiz.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const QuizHeader = () => {
  return (
    <div className="quiz__header">
      <div className="quiz__header--content">
        <div className="quiz__left">
          <img className="header__logo--quiz" src={img} alt="" />
          <h1 className="header__text--quiz">Test - Lion King</h1>
        </div>
        <div className="quiz__right">
          <Link to="/">
            <img className="header__exit--quiz" src={exit} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizHeader;
