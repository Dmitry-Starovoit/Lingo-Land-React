import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const BeforeWatching = (props) => {
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

  const checkAns = (pageTwoData, result) => {
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
  return (
    <>
      <FirstPage valueHandlerAfter={valueHandlerAfter} state={props.state} />
      <SecondPage state={props.state} checkAns={checkAns} />
      <ThirdPage valueHandlerAfter={valueHandlerAfter} state={props.state} />
    </>
  );
};

export default BeforeWatching;
