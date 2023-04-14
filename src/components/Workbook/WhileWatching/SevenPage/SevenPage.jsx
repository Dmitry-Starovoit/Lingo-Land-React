import "./SevenPage.css";
import { useState } from "react";
import TaskElevenSevenPage from "./TaskEleven/TaskEleven";

const SevenPage = (props) => {
  const [changeTextTask11, setChangeTextTask11] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask11(
      props.task11Result.size < 4
        ? `Correct ${props.task11Result.size}/${props.task11Data.length}`
        : `All are correct!`
    );
    console.log(props.task11Result);
  };

  return (
    <div className="page__seven">
      <h1>While Watching</h1>
      <TaskElevenSevenPage
        valueEventHandlerTask11={props.valueEventHandlerTask11}
        task11Result={props.task11Result}
        task11Data={props.task11Data}
      />
      <h4>{changeTextTask11}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SevenPage;
