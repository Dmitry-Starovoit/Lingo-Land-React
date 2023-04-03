import TaskEightFivePage from "./TaskEight/TaskEight";
import "./FivePage.css";
import { useState } from "react";

const FivePage = () => {
  const task8Ans = ["1", "2", "3", "4", "5", "6", "7", "8"];
  let task8Result = new Set();

  const [changeTextTask8, setChangeTextTask8] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask8(
      task8Result.size < 8
        ? `Correct ${task8Result.size}/${task8Ans.length}`
        : `All are correct!`
    );
  };
  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
        console.log(taskResult);
      }
    }
  };

  const valueEventHandlerTask8 = (getValue) => {
    valueHandler(task8Ans, task8Result, getValue);
  };

  return (
    <div className="page__five">
      <h1>While Watching</h1>
      <TaskEightFivePage valueEventHandlerTask8={valueEventHandlerTask8} />
      <h4>{changeTextTask8}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FivePage;
