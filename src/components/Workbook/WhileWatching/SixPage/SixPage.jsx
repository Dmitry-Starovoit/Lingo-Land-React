import "./SixPage.css";
import { useState } from "react";
import TaskNineSixPage from "./TaskNine/TaskNine";
import TaskTenSixPage from "./TaskTen/TaskTen";

const SixPage = (props) => {
  const task9Data = props.state.page6Reducer.task9Data;
  let task9Result = new Set();
  const task10Data = props.state.page6Reducer.task10Data;
  let task10Result = new Set();

  const [changeTextTask9, setChangeTextTask9] = useState("");
  const [changeTextTask10, setChangeTextTask10] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask9(
      task9Result.size < task9Data.length
        ? `Correct ${task9Result.size}/${task9Data.length}`
        : `All are correct!`
    );
    setChangeTextTask10(
      task10Result.size < task10Data.length
        ? `Correct ${task10Result.size}/${task10Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__six">
      <h1>While Watching</h1>
      <TaskNineSixPage
        valueHandlerAfter={props.valueHandlerAfter}
        task9Data={task9Data}
        task9Result={task9Result}
      />
      <h4>{changeTextTask9}</h4>
      <TaskTenSixPage
        valueHandlerAfter={props.valueHandlerAfter}
        task10Data={task10Data}
        task10Result={task10Result}
      />
      <h4>{changeTextTask10}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SixPage;
