import { useState } from "react";
import "./FourteenPageTask.css";

const FourteenPageTask = (props) => {
  const valueEventListenerTaskOne = (event) => {
    if (event.target.value === "true") {
      props.task14Result.add(event.target.id);
    } else {
      props.task14Result.delete(event.target.id);
    }
  };

  return (
    <div className="fourteen__page--task">
      {props.task14Data.map((items, index) => {
        return (
          <div key={index} className="fourteen__page--block">
            <p className="question__text">{items.questionText}</p>
            {items.answerOptions.map((items, index) => {
              return (
                <div key={index} className="answers__fourteen">
                  <input
                    className="checkbox__input"
                    type="radio"
                    onChange={valueEventListenerTaskOne}
                    id={items.id}
                    name={items.id}
                    value={items.isCorrect}
                  />
                  <label className="text">{items.answerText}</label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default FourteenPageTask;
