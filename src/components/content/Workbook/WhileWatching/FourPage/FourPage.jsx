import TaskSevenFourPage from "./TaskSeven/TaskSeven";
import "./FourPage.css";
import { useState } from "react";

const FourPage = (props) => {
  const [changeTextTask7, setChangeTextTask7] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask7(
      props.task7Result.size < 6
        ? `Correct ${props.task7Result.size}/${props.task7Ans.length}`
        : `All are correct!`
    );
  };

  return (
    <div className="page__four">
      <h1>While Watching</h1>
      <TaskSevenFourPage
        valueEventHandlerTask7={props.valueEventHandlerTask7}
      />
      <h4>{changeTextTask7}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FourPage;
