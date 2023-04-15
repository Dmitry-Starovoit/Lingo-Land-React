import { useState } from "react";
import "./TaskOne.css";
import { useDispatch } from "react-redux";
import { getValueTask1 } from "../../../../../store/actions";

const TaskOneFirstPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task1Page1];
    newInputValues[index].value = value;
    dispatch(getValueTask1(newInputValues));
  };
  props.valueHandlerAfter(props.task1Page1, props.task1Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">1. Fill in the gaps</h3>
      </div>
      <div className="task__one">
        <p className="task__text">
          {props.task1Page1.map((item, index) => {
            return (
              <label key={index}>
                {item.textBefore}
                <input
                  value={item.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  type="text"
                  className="input__text"
                />{" "}
                {item.textAfter}{" "}
              </label>
            );
          })}
        </p>
      </div>
    </>
  );
};

export default TaskOneFirstPage;
