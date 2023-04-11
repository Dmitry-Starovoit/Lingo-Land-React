import { useState } from "react";
import "./FifteenPageTaskTwo.css";

const FifteenPageTaskTwo = (props) => {
  const [inputValues, setInputValues] = useState(props.page15Task2Ans);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index].value = value;
    setInputValues(newInputValues);
  };

  props.valueHandlerAfter(inputValues, props.page15Task2Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">Who is it ?</h3>
      </div>
      <div className="fifteen__first--column">
        <div className="block__fifteen--page">
          <img src={inputValues[0].img}></img>
          <div className="input__block--fifteen">
            <input
              type="text"
              value={inputValues[0].value}
              onChange={(e) => handleInputChange(0, e.target.value)}
            />
          </div>
        </div>
        <div className="block__fifteen--page">
          <img src={inputValues[1].img}></img>
          <div className="input__block--fifteen">
            <input
              type="text"
              value={inputValues[1].value}
              onChange={(e) => handleInputChange(1, e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="fifteen__second--column">
        <div className="block__fifteen--page">
          <img src={inputValues[2].img}></img>
          <div className="input__block--fifteen">
            <input
              type="text"
              value={inputValues[2].value}
              onChange={(e) => handleInputChange(2, e.target.value)}
            />
          </div>
        </div>
        <div className="block__fifteen--page">
          <img src={inputValues[3].img}></img>
          <div className="input__block--fifteen">
            <input
              type="text"
              value={inputValues[3].value}
              onChange={(e) => handleInputChange(3, e.target.value)}
            />
          </div>
        </div>
        <div className="block__fifteen--page">
          <img src={inputValues[4].img}></img>
          <div className="input__block--fifteen">
            <input
              type="text"
              value={inputValues[4].value}
              onChange={(e) => handleInputChange(4, e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifteenPageTaskTwo;
