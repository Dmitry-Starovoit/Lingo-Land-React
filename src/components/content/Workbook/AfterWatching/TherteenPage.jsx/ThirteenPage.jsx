import TaskThirteenPage from "./Task/TaskThirteenPage";
import "./ThirteenPage.css";
import { useState } from "react";

const ThirteenPage = (props) => {
  const [changeText, setChangeText] = useState("");

  const changeTextFunc = () => {
    setChangeText(
      props.task13Result.size < props.task13Ans.length
        ? `Correct ${props.task13Result.size}/${props.task13Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__thirteen">
      <h1>After Watching</h1>
      <TaskThirteenPage
        task13Result={props.task13Result}
        task13Ans={props.task13Ans}
      />
      <h4>{changeText}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ThirteenPage;
