import { useState } from "react";
import "./FirstPage.css";
import TaskOneFirstPage from "./TaskOne/TaskOne";
import TaskThreeFirstPage from "./TaskThree/TaskThree";
import TaskTwoFirstPage from "./TaskTwo/TaskTwo";

const FirstPage = (props) => {
  const task1Page1 = props.state.page1Task1Reducer.task1Page;
  const task1Result = new Set();

  const task2DataColumnFirst =
    props.state.page1Task1Reducer.task2DataColumnFirst;
  const task2DataColumnSecond =
    props.state.page1Task1Reducer.task2DataColumnSecond;
  let task2ResultFirst = new Set();
  let task2ResultSecond = new Set();

  const task3Data = props.state.page1Task1Reducer.task3Data;
  let task3Result = new Set();
  const task2Data = [...task2DataColumnFirst, ...task2DataColumnSecond];

  const [changeTextTask1, setChangeTextTask1] = useState("");
  const [changeTextTask2, setChangeTextTask2] = useState("");
  const [changeTextTask3, setChangeTextTask3] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      task1Result.size < 6
        ? `Correct ${task1Result.size}/${task1Page1.length}`
        : `All are correct!`
    );
    setChangeTextTask2(
      task2ResultFirst.size + task2ResultSecond.size < 16
        ? `Correct ${task2ResultFirst.size + task2ResultSecond.size}/${
            task2Data.length
          }`
        : `All are correct!`
    );
    setChangeTextTask3(
      task3Result.size < 4
        ? `Correct ${task3Result.size}/${task3Data.length}`
        : `All are correct!`
    );
  };

  return (
    <div className="page__one">
      <h1>Before Watching</h1>
      <TaskOneFirstPage
        valueHandlerAfter={props.valueHandlerAfter}
        task1Result={task1Result}
        task1Page1={task1Page1}
      />
      <h4> {changeTextTask1}</h4>
      <TaskTwoFirstPage
        task2DataColumnFirst={task2DataColumnFirst}
        task2DataColumnSecond={task2DataColumnSecond}
        task2Data={task2Data}
        task2ResultFirst={task2ResultFirst}
        task2ResultSecond={task2ResultSecond}
        valueHandlerAfter={props.valueHandlerAfter}
      />
      <h4> {changeTextTask2}</h4>
      <TaskThreeFirstPage
        task3Data={task3Data}
        task3Result={task3Result}
        valueHandlerAfter={props.valueHandlerAfter}
      />
      <h4> {changeTextTask3}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FirstPage;
