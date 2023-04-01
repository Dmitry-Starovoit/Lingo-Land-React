import TaskFiveThirdPage from "./TaskFive/TaskFive";
import TaskSixThirdPage from "./TaskSix/TaskSix";
import "./ThirdPage.css";
import { useState } from "react";

const ThirdPage = () => {
  const task5Ans = ["mud", "den", "evil", "scraps", "disrespect", "precious"];
  const task6Ans = ["1", "2", "3", "4", "5", "6"];
  let task5Result = new Set();
  let task6Result = new Set();
  const [changeTextTask5, setChangeTextTask5] = useState("");
  const [changeTextTask6, setChangeTextTask6] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask5(
      task5Result.size < 6
        ? `Correct ${task5Result.size}/${task5Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask6(
      task6Result.size < 6
        ? `Correct ${task6Result.size}/${task6Ans.length}`
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

  const valueEventHandlerTask5 = (getValue) => {
    valueHandler(task5Ans, task5Result, getValue);
  };
  const valueEventHandlerTask6 = (getValue) => {
    valueHandler(task6Ans, task6Result, getValue);
  };
  return (
    <div className="page__third">
      <h1>
        Before <span></span>Watching
      </h1>
      <TaskFiveThirdPage valueEventHandlerTask5={valueEventHandlerTask5} />
      <h4> {changeTextTask5}</h4>
      <TaskSixThirdPage valueEventHandlerTask6={valueEventHandlerTask6} />
      <h4> {changeTextTask6}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ThirdPage;
