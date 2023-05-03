import TaskThirteenPage from "./Task/TaskThirteenPage";
import task13Data from "../../../../assets/JsonData/Task13Data";
import "./ThirteenPage.css";
import { useState } from "react";

const ThirteenPage = (props) => {
  const [changeText, setChangeText] = useState("");
  const task13Result = new Set();

  const changeTextFunc = () => {
    setChangeText(
      task13Result.size < task13Data.length
        ? `Correct ${task13Result.size}/${task13Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__thirteen">
      <h1>After Watching</h1>
      <TaskThirteenPage task13Result={task13Result} task13Data={task13Data} />
      <h4>{changeText}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ThirteenPage;
