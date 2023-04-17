import TaskTwelvePage from "./Task/TaskTwelvePage";
import "./TwelvePage.css";
import { useState } from "react";

const TwelvePage = (props) => {
  const page12Data = props.state.page12Reducer.page12Data;
  const page12Result = new Set();
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      page12Result.size < page12Data.length
        ? `Correct ${page12Result.size}/${page12Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__twelve">
      <h1>After Watching</h1>
      <TaskTwelvePage
        page12Result={page12Result}
        valueHandlerAfter={props.valueHandlerAfter}
        page12Data={page12Data}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default TwelvePage;
