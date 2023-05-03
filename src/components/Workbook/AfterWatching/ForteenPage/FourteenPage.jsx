import FourteenPageTask from "./Task/FourteenPageTask";
import task14Data from "../../../../assets/JsonData/Task14Data";
import "./FourteenPage.css";
import { useState } from "react";

const FourteenPage = (props) => {
  const [changeText, setChangeText] = useState("");

  const task14Result = new Set();
  const changeTextFunc = () => {
    setChangeText(
      task14Result.size < task14Data.length
        ? `Correct ${task14Result.size}/${task14Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__fourteen">
      <h1>After Watching</h1>
      <FourteenPageTask task14Result={task14Result} task14Data={task14Data} />
      <h4>{changeText}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FourteenPage;
