import FourPage from "./FourPage/FourPage";
import FivePage from "./FivePage/FivePage";
import SixPage from "./SixPage/SixPage";
import SevenPage from "./SevenPage/SevenPage";

const WhileWatching = (props) => {
  ///////FourPage////////
  const task7Ans = [
    "aproaches",
    "requested",
    "will rise",
    "made",
    "will answer",
    "don't look",
  ];
  let task7Result = new Set();
  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
      } else {
        taskResult.delete(taskAns[i]);
      }
    }
  };
  const valueEventHandlerTask7 = (getValue) => {
    valueHandler(task7Ans, task7Result, getValue);
  };

  /////////FivePage/////////////
  const valueHandlerAfter = (inputValues, result) => {
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i].value === inputValues[i].answer) {
        result.add(inputValues[i].id);
      } else {
        result.delete(inputValues[i].id);
      }
    }
    return result;
  };

  return (
    <>
      <FourPage
        valueHandler={valueHandler}
        valueEventHandlerTask7={valueEventHandlerTask7}
        task7Ans={task7Ans}
        task7Result={task7Result}
      />
      <FivePage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <SixPage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <SevenPage state={props.state} />
    </>
  );
};

export default WhileWatching;
