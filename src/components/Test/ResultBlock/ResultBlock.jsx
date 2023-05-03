import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ResultBlock = (props) => {
  return (
    <>
      <h4>The Lion King</h4>
      <h1>Картки переглянуті!</h1>
      <div>
        <button
          onClick={() => {
            props.nullishFunc();
          }}
          class="mainmenubtn"
        >
          Продовжити
        </button>
      </div>
      <div>
        <Link to="/">
          <button class="mainmenubtn">На головне меню</button>
        </Link>
      </div>
      <div className="result__block">
        <h4>Результати:</h4>
        <div className="result__block--flex">
          <div className="result__block--item">
            <h4>{`Я знаю     ${props.plus}`}</h4>
          </div>
          <div className="result__block--item">
            <h4>{`Я вивчаю   ${props.minus}`}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultBlock;
