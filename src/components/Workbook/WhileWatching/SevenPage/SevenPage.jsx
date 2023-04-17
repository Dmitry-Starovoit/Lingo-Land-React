import "./SevenPage.css";
import { useState } from "react";
import TaskElevenSevenPage from "./TaskEleven/TaskEleven";
import { useSelector } from "react-redux";

const SevenPage = (props) => {
  const task11ColumnFirst = useSelector(
    (state) => state.page7Reducer.task11ColumnFirst
  );
  const task11ColumnSecond = useSelector(
    (state) => state.page7Reducer.task11ColumnSecond
  );

  const task11ResultFirst = useSelector(
    (state) => state.page7Reducer.task11ResultFirst
  );
  const task11ResultSecond = useSelector(
    (state) => state.page7Reducer.task11ResultSecond
  );

  const [changeTextTask11, setChangeTextTask11] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask11(
      task11ResultFirst.size + task11ResultSecond.size < 4
        ? `Correct ${task11ResultFirst.size + task11ResultSecond.size}/${
            task11ColumnFirst.length + task11ColumnSecond.length
          }`
        : `All are correct!`
    );
  };

  return (
    <div className="page__seven">
      <h1>While Watching</h1>
      <TaskElevenSevenPage
        task11ColumnFirst={task11ColumnFirst}
        task11ColumnSecond={task11ColumnSecond}
        task11ResultFirst={task11ResultFirst}
        task11ResultSecond={task11ResultSecond}
      />
      <h4>{changeTextTask11}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default SevenPage;
