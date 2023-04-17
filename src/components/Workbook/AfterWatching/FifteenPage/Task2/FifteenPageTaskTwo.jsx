import { useState } from "react";
import "./FifteenPageTaskTwo.css";
import { useDispatch } from "react-redux";
import { getValue2Page15 } from "../../../../../store/actions";

const FifteenPageTaskTwo = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.page15Task2DataFirstColumn];
    newInputValues[index].value = value;
    dispatch(getValue2Page15(newInputValues));
  };
  const handleInputChange2 = (index, value) => {
    const newInputValues = [...props.page15Task2DataSecondColumn];
    newInputValues[index].value = value;
    dispatch(getValue2Page15(newInputValues));
  };

  props.valueHandlerAfter(
    props.page15Task2DataFirstColumn,
    props.page15Task2Result
  );
  props.valueHandlerAfter(
    props.page15Task2DataSecondColumn,
    props.page15Task2Result
  );

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">Who is it ?</h3>
      </div>
      <div className="fifteen__first--column">
        {props.page15Task2DataFirstColumn.map((item, index) => {
          return (
            <div className="block__fifteen--page">
              <img alt="img" src={item.img}></img>
              <div className="input__block--fifteen">
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="fifteen__second--column">
        {props.page15Task2DataSecondColumn.map((item, index) => {
          return (
            <div className="block__fifteen--page">
              <img alt="img" src={item.img}></img>
              <div className="input__block--fifteen">
                <input
                  type="text"
                  value={item.value}
                  onChange={(e) => handleInputChange2(index, e.target.value)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FifteenPageTaskTwo;
