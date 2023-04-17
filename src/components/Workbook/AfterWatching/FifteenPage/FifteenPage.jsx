import "./FifteenPage.css";
import { useState } from "react";
import FifteenPageTaskOne from "./Task1/FifteenPageTaskOne";
import FifteenPageTaskTwo from "./Task2/FifteenPageTaskTwo";

const FifteenPage = (props) => {
  const page15Task1Data = props.state.page15Reducer.task1Page15;
  const page15Task1Result = new Set();

  const page15Task2DataFirstColumn =
    props.state.page15Reducer.task2Page15ColumnFirst;
  const page15Task2DataSecondColumn =
    props.state.page15Reducer.task2Page15ColumnSecond;
  const page15Task2Result = new Set();

  const [changeTextTask1, setChangeTextTask1] = useState("");
  const [changeTextTask2, setChangeTextTask2] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      page15Task1Result.size < page15Task1Data.length
        ? `Correct ${page15Task1Result.size}/${page15Task1Data.length}`
        : `All are correct!`
    );
    setChangeTextTask2(
      page15Task2Result.size <
        page15Task2DataFirstColumn.length + page15Task2DataSecondColumn.length
        ? `Correct ${page15Task2Result.size}/${
            page15Task2DataFirstColumn.length +
            page15Task2DataSecondColumn.length
          }`
        : `All are correct!`
    );
  };

  return (
    <div className="page__fifteen">
      <h1>After Watching</h1>
      <FifteenPageTaskOne
        page15Task1Data={page15Task1Data}
        page15Task1Result={page15Task1Result}
        valueHandlerAfter={props.valueHandlerAfter}
      />

      <h4>{changeTextTask1}</h4>
      <FifteenPageTaskTwo
        page15Task2DataFirstColumn={page15Task2DataFirstColumn}
        page15Task2DataSecondColumn={page15Task2DataSecondColumn}
        page15Task2Result={page15Task2Result}
        valueHandlerAfter={props.valueHandlerAfter}
      />
      <h4>{changeTextTask2}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FifteenPage;
