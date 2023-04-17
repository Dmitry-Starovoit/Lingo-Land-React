import "./ElevenPage.css";
import { useState } from "react";
import TaskElevenPage from "./Task/TaskElevenPage";

const ElevenPage = (props) => {
  const page11Data = props.state.page11Reducer.page11Data;

  const page11Result = new Set();
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      page11Result.size < 5
        ? `Correct ${page11Result.size}/${page11Data.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__eleven">
      <h1>After Watching</h1>
      <TaskElevenPage
        page11Data={page11Data}
        page11Result={page11Result}
        valueHandlerAfter={props.valueHandlerAfter}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default ElevenPage;
