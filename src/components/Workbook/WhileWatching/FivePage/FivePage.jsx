import TaskEightFivePage from "./TaskEight/TaskEight";
import "./FivePage.css";
import { useState } from "react";

const FivePage = (props) => {
  const task8Data = props.state.page5Reducer.task8Data;
  let task8Result = new Set();

  const [changeTextTask8, setChangeTextTask8] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask8(
      task8Result.size < task8Data.length
        ? `Correct ${task8Result.size}/${task8Data.length}`
        : `All are correct!`
    );
  };

  return (
    <div className="page__five">
      <h1>While Watching</h1>
      <TaskEightFivePage
        valueHandlerAfter={props.valueHandlerAfter}
        task8Data={task8Data}
        task8Result={task8Result}
      />
      <h4>{changeTextTask8}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FivePage;
