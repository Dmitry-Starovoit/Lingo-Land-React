import TaskTenPage from "./Task/TaskTenPage";
import "./TenPage.css";
import { useState } from "react";

const TenPage = (props) => {
  const page10Data = props.state.page10Reducer.page10Data;
  const page10Result = new Set();
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      page10Result.size < page10Data.length
        ? `Correct ${page10Result.size}/${page10Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__ten">
      <h1>After Watching</h1>
      <TaskTenPage
        page10Result={page10Result}
        valueHandlerAfter={props.valueHandlerAfter}
        page10Data={page10Data}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default TenPage;
