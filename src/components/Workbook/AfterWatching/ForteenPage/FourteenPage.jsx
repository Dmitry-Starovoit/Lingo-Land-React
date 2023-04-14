import FourteenPageTask from "./Task/FourteenPageTask";
import "./FourteenPage.css";
import { useState } from "react";

const FourteenPage = (props) => {
  const [changeText, setChangeText] = useState("");

  const changeTextFunc = () => {
    setChangeText(
      props.task14Result.size < props.task14Ans.length
        ? `Correct ${props.task14Result.size}/${props.task14Ans.length}`
        : `All are correct!`
    );
  };
  return (
    <div className="page__fourteen">
      <h1>After Watching</h1>
      <FourteenPageTask
        task14Result={props.task14Result}
        task14Ans={props.task14Ans}
      />
      <h4>{changeText}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FourteenPage;
