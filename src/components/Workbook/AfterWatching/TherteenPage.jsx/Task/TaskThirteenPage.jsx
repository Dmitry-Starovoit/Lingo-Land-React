import { useState } from "react";
import "./TaskThirteenPage.css";

const TaskThirteenPage = (props) => {
  const valueEventListenerTaskOne = (event) => {
    if (event.target.value === "true") {
      props.task13Result.add(event.target.id);
    } else {
      props.task13Result.delete(event.target.id);
    }
  };

  return (
    <div className="therteen__page--task">
      {props.task13Ans.map((items) => {
        return (
          <div className="thirteen__page--block">
            <p className="question__text">{items.questionText}</p>
            {items.answerOptions.map((items) => {
              return (
                <div className="answers__thirteen">
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

export default TaskThirteenPage;
