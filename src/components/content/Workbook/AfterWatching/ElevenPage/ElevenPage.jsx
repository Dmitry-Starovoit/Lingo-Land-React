import TaskTenPage from "./Task/TaskElevenPage";
import "./ElevenPage.css";
import { useState } from "react";
import TaskElevenPage from "./Task/TaskElevenPage";

const ElevenPage = (props) => {
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      props.page11Result.size < 5
        ? `Correct ${props.page11Result.size}/${props.page11Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__eleven">
      <h1>After Watching</h1>
      <TaskElevenPage
        page11Result={props.page11Result}
        valueHandlerAfter={props.valueHandlerAfter}
        handleInputChange={props.handleInputChange}
        page11Ans={props.page11Ans}
        inputValues={props.inputValues}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ElevenPage;
