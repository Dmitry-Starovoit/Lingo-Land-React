import "./SixPage.css";
import { useState } from "react";
import TaskNineSixPage from "./TaskNine/TaskNine";
import TaskTenSixPage from "./TaskTen/TaskTen";

const SixPage = (props) => {
  const [changeTextTask9, setChangeTextTask9] = useState("");
  const [changeTextTask10, setChangeTextTask10] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask9(
      props.task9Result.size < 9
        ? `Correct ${props.task9Result.size}/${props.task9Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask10(
      props.task10Result.size < 4
        ? `Correct ${props.task10Result.size}/${props.task10Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__six">
      <h1>While Watching</h1>
      <TaskNineSixPage valueEventHandlerTask9={props.valueEventHandlerTask9} />
      <h4>{changeTextTask9}</h4>
      <TaskTenSixPage valueEventHandlerTask10={props.valueEventHandlerTask10} />
      <h4>{changeTextTask10}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SixPage;
