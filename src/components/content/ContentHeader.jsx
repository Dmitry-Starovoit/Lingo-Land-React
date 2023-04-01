import "./ContentHeader.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const ContentHeader = function (props) {
  return (
    <div className="content">
      <div className="content__header">
        <h1 className="content__title">Learn English | Lingo Land</h1>
        <h4 className="content__title--text">
          Learn English easily and <span>confidently with Lingo Land</span>
        </h4>
        <Link to="/workbook">
          <button className="content__title--button">
            GO TO OUR <span>WORKBOOKS</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentHeader;
