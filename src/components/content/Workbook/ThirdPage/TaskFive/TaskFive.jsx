import "./TaskFive.css";
import { useState } from "react";
const TaskFiveThirdPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };
  props.valueEventHandlerTask5(getValue);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">5. Guess what it is</h3>
      </div>
      <div className="task__five">
        <p className="task__five--text">1. Something moist and soft.</p>
        <input
          name="value0"
          value={getValue.value0 || ""}
          onChange={valueEventListener}
          id="0"
          type="text"
          className="task__five--input"
        />
        <p className="task__five--text">2. The home of a wild animal.</p>
        <input
          name="value1"
          value={getValue.value1 || ""}
          onChange={valueEventListener}
          id="1"
          type="text"
          className="task__five--input"
        />
        <p className="task__five--text">3. The opposite of good.</p>
        <input
          name="value2"
          value={getValue.value2 || ""}
          onChange={valueEventListener}
          id="2"
          type="text"
          className="task__five--input"
        />
        <p className="task__five--text">
          4. Piece of food left after dinner or breakfast.
        </p>
        <input
          name="value3"
          value={getValue.value3 || ""}
          onChange={valueEventListener}
          id="3"
          type="text"
          className="task__five--input"
        />
        <p className="task__five--text">5. The opposite of respect.</p>
        <input
          name="value4"
          value={getValue.value4 || ""}
          onChange={valueEventListener}
          id="4"
          type="text"
          className="task__five--input"
        />
        <p className="task__five--text">
          6. This word can be described as something valuable.
        </p>
        <input
          name="value5"
          value={getValue.value5 || ""}
          onChange={valueEventListener}
          id="5"
          type="text"
          className="task__five--input"
        />
      </div>
    </>
  );
};

export default TaskFiveThirdPage;
