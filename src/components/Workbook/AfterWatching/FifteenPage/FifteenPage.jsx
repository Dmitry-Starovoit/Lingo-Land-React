import "./FifteenPage.css";
import { useState } from "react";
import FifteenPageTaskOne from "./Task1/FifteenPageTaskOne";
import FifteenPageTaskTwo from "./Task2/FifteenPageTaskTwo";

const FifteenPage = (props) => {
  const [changeTextTask1, setChangeTextTask1] = useState("");
  const [changeTextTask2, setChangeTextTask2] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      props.page15Task1Result.size < props.page15Task1Ans.length
        ? `Correct ${props.page15Task1Result.size}/${props.page15Task1Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask2(
      props.page15Task2Result.size < props.page15Task2Ans.length
        ? `Correct ${props.page15Task2Result.size}/${props.page15Task2Ans.length}`
        : `All are correct!`
    );
  };
  const valueEventHandlerTask1 = (getValue) => {
    props.valueHandler(props.page15Task1Ans, props.page15Task1Result, getValue);
  };
  return (
    <div className="page__fifteen">
      <h1>After Watching</h1>
      <FifteenPageTaskOne
        page15Task1Ans={props.page15Task1Ans}
        page15Task1Result={props.page15Task1Result}
        valueEventHandler={valueEventHandlerTask1}
      />

      <h4>{changeTextTask1}</h4>
      <FifteenPageTaskTwo
        page15Task2Result={props.page15Task2Result}
        valueHandlerAfter={props.valueHandlerAfter}
        page15Task2Ans={props.page15Task2Ans}
      />
      <h4>{changeTextTask2}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FifteenPage;
