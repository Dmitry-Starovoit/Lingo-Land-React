import { useState } from "react";
import "./TaskTwo.css";

const TaskTwoFirstPage = (props) => {
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
        <h3 className="task__title--text">2. Translate the words</h3>
      </div>
      <div className="task__two">
        <div className="task__two--item">
          <div className="task__two--flex">
            <div className="task__two--text">
              {props.task2DataColumnFirst.map((item) => {
                return <p>{item.que}</p>;
              })}
            </div>
            <div className="task__two--input">
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
              <input
                name="value4"
                value={getValue.value4 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value5"
                value={getValue.value5 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value6"
                value={getValue.value6 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value7"
                value={getValue.value7 || ""}
                onChange={valueEventListener}
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="task__two--item">
          <div className="task__two--flex">
            <div className="task__two--text">
              {props.task2DataColumnSecond.map((item) => {
                return <p>{item.que}</p>;
              })}
            </div>
            <div className="task__two--input">
              <input
                name="value8"
                value={getValue.value8 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value9"
                value={getValue.value9 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value10"
                value={getValue.value10 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value11"
                value={getValue.value11 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value12"
                value={getValue.value12 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value13"
                value={getValue.value13 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value14"
                value={getValue.value14 || ""}
                onChange={valueEventListener}
                type="text"
              />
              <input
                name="value15"
                value={getValue.value15 || ""}
                onChange={valueEventListener}
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskTwoFirstPage;
