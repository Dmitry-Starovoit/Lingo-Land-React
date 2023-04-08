import TaskFiveThirdPage from "./TaskFive/TaskFive";
import TaskSixThirdPage from "./TaskSix/TaskSix";
import "./ThirdPage.css";
import { useState } from "react";

const ThirdPage = (props) => {
  const [changeTextTask5, setChangeTextTask5] = useState("");
  const [changeTextTask6, setChangeTextTask6] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask5(
      props.task5Result.size < 6
        ? `Correct ${props.task5Result.size}/${props.task5Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask6(
      props.task6Result.size < 6
        ? `Correct ${props.task6Result.size}/${props.task6Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__third">
      <h1>
        Before <span></span>Watching
      </h1>
      <TaskFiveThirdPage
        valueEventHandlerTask5={props.valueEventHandlerTask5}
      />
      <h4> {changeTextTask5}</h4>
      <TaskSixThirdPage valueEventHandlerTask6={props.valueEventHandlerTask6} />
      <h4> {changeTextTask6}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ThirdPage;
