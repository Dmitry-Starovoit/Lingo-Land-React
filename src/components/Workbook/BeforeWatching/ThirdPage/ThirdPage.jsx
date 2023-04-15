import TaskFiveThirdPage from "./TaskFive/TaskFive";
import TaskSixThirdPage from "./TaskSix/TaskSix";
import "./ThirdPage.css";
import { useState } from "react";

const ThirdPage = (props) => {
  const task5Data = props.state.page3Reducer.task5Page;
  let task5Result = new Set();

  const task6Data = props.state.page3Reducer.task6Page;
  let task6Result = new Set();

  const [changeTextTask5, setChangeTextTask5] = useState("");
  const [changeTextTask6, setChangeTextTask6] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask5(
      task5Result.size < task5Data.length
        ? `Correct ${task5Result.size}/${task5Data.length}`
        : `All are correct!`
    );
    setChangeTextTask6(
      task6Result.size < task6Data.length
        ? `Correct ${task6Result.size}/${task6Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__third">
      <h1>
        Before <span></span>Watching
      </h1>
      <TaskFiveThirdPage
        valueHandlerAfter={props.valueHandlerAfter}
        task5Data={task5Data}
        task5Result={task5Result}
      />
      <h4> {changeTextTask5}</h4>
      <TaskSixThirdPage
        valueHandlerAfter={props.valueHandlerAfter}
        task6Data={task6Data}
        task6Result={task6Result}
      />
      <h4> {changeTextTask6}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ThirdPage;
