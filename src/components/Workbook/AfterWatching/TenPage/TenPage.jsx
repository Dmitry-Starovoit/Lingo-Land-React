import TaskTenPage from "./Task/TaskTenPage";
import "./TenPage.css";
import { useState } from "react";

const TenPage = (props) => {
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      props.page10Result.size < 5
        ? `Correct ${props.page10Result.size}/${props.page10Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__ten">
      <h1>After Watching</h1>
      <TaskTenPage
        page10Result={props.page10Result}
        valueHandlerAfter={props.valueHandlerAfter}
        handleInputChange={props.handleInputChange}
        page10Ans={props.page10Ans}
        inputValues={props.inputValues}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default TenPage;
