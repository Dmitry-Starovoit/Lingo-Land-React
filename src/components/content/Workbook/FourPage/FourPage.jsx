import TaskSevenFourPage from "./TaskSeven/TaskSeven";
import "./FourPage.css";
import { useState } from "react";

const FourPage = () => {
  const task7Ans = [
    "aproaches",
    "requested",
    "will rise",
    "made",
    "will answer",
    "don't look",
  ];
  let task7Result = new Set();

  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      task7Result.size < 6
        ? `Correct ${task7Result.size}/${task7Ans.length}`
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

  const valueEventHandlerTask7 = (getValue) => {
    valueHandler(task7Ans, task7Result, getValue);
  };
  return (
    <div className="page__four">
      <h1>While Watching</h1>
      <TaskSevenFourPage valueEventHandlerTask7={valueEventHandlerTask7} />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FourPage;
