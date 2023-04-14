import { useState } from "react";
import "./TaskTwelvePage.css";
import img from "../../../../../assets/after_watching/img-1.png";

const TaskTwelvePage = (props) => {
  const [inputValues, setInputValues] = useState(props.page12Ans);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index].value = value;
    setInputValues(newInputValues);
  };

  props.valueHandlerAfter(inputValues, props.page12Result);

  return (
    <>
      {inputValues.map((value, index) => (
        <div key={index} className="block__twelve--page">
          <p>{value.text}</p>
          <input
            type="text"
            value={value.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <img src={img} alt="" />
        </div>
      ))}
    </>
  );
};

export default TaskTwelvePage;
