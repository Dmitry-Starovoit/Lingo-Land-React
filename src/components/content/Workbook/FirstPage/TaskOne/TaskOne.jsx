import { useState } from "react";
import "./TaskOne.css";

const TaskOneFirstPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  props.valueEventHandler(getValue);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">1. Fill in the gaps</h3>
      </div>
      <div className="task__one">
        <p className="task__text">
          I always show{" "}
          <input
            name="value0"
            value={getValue.value0 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="input__text"
          />{" "}
          to my elders. She made a{" "}
          <input
            name="value1"
            value={getValue.value1 || ""}
            onChange={valueEventListener}
            id="1"
            type="text"
            className="input__text"
          />{" "}
          to meet me at the park. The{" "}
          <input
            name="value2"
            value={getValue.value2 || ""}
            onChange={valueEventListener}
            id="2"
            type="text"
            className="input__text"
          />{" "}
          car drove by our house every hour . He is a{" "}
          <input
            name="value3"
            value={getValue.value3 || ""}
            onChange={valueEventListener}
            id="3"
            type="text"
            className="input__text"
          />{" "}
          man who always offers good advice .{" "}
          <input
            name="value4"
            value={getValue.value4 || ""}
            onChange={valueEventListener}
            id="4"
            type="text"
            className="input__text"
          />{" "}
          the door won`t solve the problem. It`s important to avoid{" "}
          <input
            name="value5"
            value={getValue.value5 || ""}
            onChange={valueEventListener}
            id="5"
            type="text"
            className="input__text"
          />{" "}
          thoughts and actions.
        </p>
      </div>
    </>
  );
};

export default TaskOneFirstPage;
