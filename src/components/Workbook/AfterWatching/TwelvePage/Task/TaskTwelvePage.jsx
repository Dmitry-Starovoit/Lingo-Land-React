import { useState } from "react";
import "./TaskTwelvePage.css";
import img from "../../../../../assets/after_watching/img-1.png";
import { useDispatch } from "react-redux";
import { getValuePage12 } from "../../../../../store/actions";

const TaskTwelvePage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.page12Data];
    newInputValues[index].value = value;
    dispatch(getValuePage12(newInputValues));
  };

  props.valueHandlerAfter(props.page12Data, props.page12Result);

  return (
    <>
      {props.page12Data.map((value, index) => (
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
