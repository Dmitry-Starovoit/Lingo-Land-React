import "./SixPage.css";
import { useState } from "react";
import TaskNineSixPage from "./TaskNine/TaskNine";
import TaskTenSixPage from "./TaskTen/TaskTen";

const SixPage = () => {
  const task9Ans = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const task10Ans = ["1", "2", "3", "4"];
  let task9Result = new Set();
  let task10Result = new Set();

  const [changeTextTask9, setChangeTextTask9] = useState("");
  const [changeTextTask10, setChangeTextTask10] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask9(
      task9Result.size < 9
        ? `Correct ${task9Result.size}/${task9Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask10(
      task10Result.size < 4
        ? `Correct ${task10Result.size}/${task10Ans.length}`
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

  const valueEventHandlerTask9 = (getValue) => {
    valueHandler(task9Ans, task9Result, getValue);
  };
  const valueEventHandlerTask10 = (getValue) => {
    valueHandler(task10Ans, task10Result, getValue);
  };
  return (
    <div className="page__six">
      <h1>While Watching</h1>
      <TaskNineSixPage valueEventHandlerTask9={valueEventHandlerTask9} />
      <h4>{changeTextTask9}</h4>
      <TaskTenSixPage valueEventHandlerTask10={valueEventHandlerTask10} />
      <h4>{changeTextTask10}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SixPage;
