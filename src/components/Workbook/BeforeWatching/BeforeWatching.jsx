import { useSelector } from "react-redux";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const BeforeWatching = (props) => {
  const valueHandlerAfter = (inputValues, result) => {
    for (let i = 0; i < inputValues.length; i++) {
      if (inputValues[i].value === inputValues[i].answer) {
        result.add(inputValues[i].answer);
      } else {
        result.delete(inputValues[i].answer);
      }
    }
    return result;
  };

  //////////SecondPage//////////

  const result = new Set();

  const checkAns = (pageTwoData) => {
    for (let i = 0; i < pageTwoData.length; i++) {
      if (
        pageTwoData[i].x <= pageTwoData[i].maxX &&
        pageTwoData[i].x >= pageTwoData[i].minX &&
        pageTwoData[i].y <= pageTwoData[i].maxY &&
        pageTwoData[i].y >= pageTwoData[i].minY
      ) {
        result.add(i);
      } else {
        result.delete(i);
      }
    }
  };

  //////////ThirdPage//////////
  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
        console.log(taskResult);
      } else {
        taskResult.delete(taskAns[i]);
      }
    }
  };
  const task5Ans = ["mud", "den", "evil", "scraps", "disrespect", "precious"];
  const task6Ans = [
    "incredible",
    "touch",
    "burn",
    "touch",
    "ooze",
    "incredible",
  ];
  let task5Result = new Set();
  let task6Result = new Set();

  const valueEventHandlerTask5 = (getValue) => {
    valueHandler(task5Ans, task5Result, getValue);
  };
  const valueEventHandlerTask6 = (getValue) => {
    valueHandler(task6Ans, task6Result, getValue);
  };
  return (
    <>
      <FirstPage valueHandlerAfter={valueHandlerAfter} state={props.state} />
      <SecondPage state={props.state} result={result} checkAns={checkAns} />
      <ThirdPage
        valueHandler={valueHandler}
        task5Ans={task5Ans}
        task6Ans={task6Ans}
        task5Result={task5Result}
        task6Result={task6Result}
        valueEventHandlerTask5={valueEventHandlerTask5}
        valueEventHandlerTask6={valueEventHandlerTask6}
      />
    </>
  );
};

export default BeforeWatching;
