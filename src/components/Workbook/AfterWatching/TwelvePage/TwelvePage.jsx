import TaskTwelvePage from "./Task/TaskTwelvePage";
import "./TwelvePage.css";
import { useState } from "react";

const TwelvePage = (props) => {
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      props.page12Result.size < 5
        ? `Correct ${props.page12Result.size}/${props.page12Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__twelve">
      <h1>After Watching</h1>
      <TaskTwelvePage
        page12Result={props.page12Result}
        valueHandlerAfter={props.valueHandlerAfter}
        handleInputChange={props.handleInputChange}
        page12Ans={props.page12Ans}
        inputValues={props.inputValues}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default TwelvePage;
