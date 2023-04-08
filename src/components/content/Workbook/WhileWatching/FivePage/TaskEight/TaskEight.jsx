import { useState } from "react";
import "./TaskEight.css";
const TaskEightFivePage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  props.valueEventHandlerTask8(getValue);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          8. Watch 07:10-07:51 and put the sentence in the correct order
        </h3>
      </div>
      <div className="flex__text__block">
        <div>
          {props.dataEightTask.map((item) => {
            return (
              <div key={Math.random()} className="text__block--eight">
                <p className="text__task--eight">{item}</p>
              </div>
            );
          })}
        </div>
        <div className="input__block--eight">
          <div>
            <input
              name="value0"
              value={getValue.value0 || ""}
              onChange={valueEventListener}
              id="0"
              type="number"
            />
          </div>
          <div>
            <input
              name="value1"
              value={getValue.value1 || ""}
              onChange={valueEventListener}
              id="1"
              type="text"
            />
          </div>
          <div>
            <input
              name="value2"
              value={getValue.value2 || ""}
              onChange={valueEventListener}
              id="2"
              type="text"
            />
          </div>
          <div>
            <input
              name="value3"
              value={getValue.value3 || ""}
              onChange={valueEventListener}
              id="3"
              type="text"
            />
          </div>
          <div>
            <input
              name="value4"
              value={getValue.value4 || ""}
              onChange={valueEventListener}
              id="4"
              type="text"
            />
          </div>
          <div>
            <input
              name="value5"
              value={getValue.value5 || ""}
              onChange={valueEventListener}
              id="5"
              type="text"
            />
          </div>
          <div>
            <input
              name="value6"
              value={getValue.value6 || ""}
              onChange={valueEventListener}
              id="6"
              type="text"
            />
          </div>
          <div>
            <input
              name="value7"
              value={getValue.value7 || ""}
              onChange={valueEventListener}
              id="7"
              type="text"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskEightFivePage;
