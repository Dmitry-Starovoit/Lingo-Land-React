import { useState } from "react";
import "./TaskElevenPage.css";
import img from "../../../../../../assets/after_watching/img-1.png";

const TaskElevenPage = (props) => {
  const [inputValues, setInputValues] = useState(props.page11Ans);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index].value = value;
    setInputValues(newInputValues);
  };

  props.valueHandlerAfter(inputValues, props.page11Result);

  return (
    <>
      {inputValues.map((value, index) => (
        <div key={index} className="block__eleven--page">
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

export default TaskElevenPage;
