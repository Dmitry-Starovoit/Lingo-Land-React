import TenPage from "./TenPage/TenPage";
import ElevenPage from "./ElevenPage/ElevenPage";
import "./AfterWatching.css";
import TwelvePage from "./TwelvePage/TwelvePage";
import ThirteenPage from "./TherteenPage.jsx/ThirteenPage";
import FourteenPage from "./ForteenPage/FourteenPage";
import FifteenPage from "./FifteenPage/FifteenPage";

const AfterWatching = (props) => {
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

  return (
    <div className="after__watching">
      <TenPage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <ElevenPage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <TwelvePage state={props.state} valueHandlerAfter={valueHandlerAfter} />
      <ThirteenPage />
      <FourteenPage />
      <FifteenPage valueHandlerAfter={valueHandlerAfter} state={props.state} />
    </div>
  );
};

export default AfterWatching;
