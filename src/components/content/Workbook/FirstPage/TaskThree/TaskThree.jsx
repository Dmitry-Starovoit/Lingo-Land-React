import { useState } from "react";
import "./TaskThree.css";

const TaskThreeFirstPage = (props) => {
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
        <h3 className="task__title--text">
          3. Put the letters in the correct order
        </h3>
      </div>
      <div className="task__three">
        <div className="task__three--item">
          {props.task3Data.map((item) => {
            return (
              <div className="items">
                <p className="task__three--text">{item.que}</p>
                <p>{item.hint}</p>
              </div>
            );
          })}
        </div>
        <div className="items__value">
          <input
            name="value0"
            value={getValue.value0 || ""}
            onChange={valueEventListener}
            type="text"
          />
          <input
            name="value1"
            value={getValue.value1 || ""}
            onChange={valueEventListener}
            type="text"
          />
          <input
            name="value2"
            value={getValue.value2 || ""}
            onChange={valueEventListener}
            type="text"
          />
          <input
            name="value3"
            value={getValue.value3 || ""}
            onChange={valueEventListener}
            type="text"
          />
        </div>
      </div>
    </>
  );
};

export default TaskThreeFirstPage;
