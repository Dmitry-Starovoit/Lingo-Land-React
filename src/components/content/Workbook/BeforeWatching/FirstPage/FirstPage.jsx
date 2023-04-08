import { useState } from "react";
import "./FirstPage.css";
import TaskOneFirstPage from "./TaskOne/TaskOne";
import TaskThreeFirstPage from "./TaskThree/TaskThree";
import TaskTwoFirstPage from "./TaskTwo/TaskTwo";

const FirstPage = (props) => {
  const task2Data = [
    ...props.task2DataColumnFirst,
    ...props.task2DataColumnSecond,
  ];
  const task2Ans = task2Data.map((obj) => obj.ans);
  const task3Ans = props.task3Data.map((obj) => obj.ans);

  let task1Result = new Set();
  let task2Result = new Set();
  let task3Result = new Set();

  const [changeTextTask1, setChangeTextTask1] = useState("");
  const [changeTextTask2, setChangeTextTask2] = useState("");
  const [changeTextTask3, setChangeTextTask3] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      task1Result.size < 6
        ? `Correct ${task1Result.size}/${props.task1Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask2(
      task2Result.size < 16
        ? `Correct ${task2Result.size}/${task2Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask3(
      task3Result.size < 4
        ? `Correct ${task3Result.size}/${task3Ans.length}`
        : `All are correct!`
    );
  };

  const valueEventHandlerTask1 = (getValue) => {
    props.valueHandler(props.task1Ans, task1Result, getValue);
  };
  const valueEventHandlerTask2 = (getValue) => {
    props.valueHandler(task2Ans, task2Result, getValue);
  };
  const valueEventHandlerTask3 = (getValue) => {
    props.valueHandler(task3Ans, task3Result, getValue);
  };

  return (
    <div className="page__one">
      <h1>Before Watching</h1>
      <TaskOneFirstPage valueEventHandler={valueEventHandlerTask1} />
      <h4> {changeTextTask1}</h4>
      <TaskTwoFirstPage
        task2DataColumnFirst={props.task2DataColumnFirst}
        task2DataColumnSecond={props.task2DataColumnSecond}
        valueEventHandler={valueEventHandlerTask2}
      />
      <h4> {changeTextTask2}</h4>
      <TaskThreeFirstPage
        task3Data={props.task3Data}
        valueEventHandler={valueEventHandlerTask3}
      />
      <h4> {changeTextTask3}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FirstPage;
