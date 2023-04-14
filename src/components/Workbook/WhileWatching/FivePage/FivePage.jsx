import TaskEightFivePage from "./TaskEight/TaskEight";
import "./FivePage.css";
import { useState } from "react";

const FivePage = (props) => {
  const [changeTextTask8, setChangeTextTask8] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask8(
      props.task8Result.size < 8
        ? `Correct ${props.task8Result.size}/${props.task8Ans.length}`
        : `All are correct!`
    );
  };

  return (
    <div className="page__five">
      <h1>While Watching</h1>
      <TaskEightFivePage
        valueEventHandlerTask8={props.valueEventHandlerTask8}
        dataEightTask={props.dataEightTask}
      />
      <h4>{changeTextTask8}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FivePage;
