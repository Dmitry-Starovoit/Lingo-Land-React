import { useState } from "react";
import "./TaskSix.css";
const TaskSixThirdPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  props.valueEventHandlerTask6(getValue);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          6. Complete the sentences with word from the list
        </h3>
      </div>

      <ul className="answer__block--six">
        <li>burn</li>
        <li>touch(2)</li>
        <li>incredible(2)</li>
        <li>ooze</li>
      </ul>

      <div className="task__six">
        <p className="task__six--text">
          1. Walking through the forest, I notice the{" "}
          <input
            name="value0"
            value={getValue.value0 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          beauty of nature around me.
        </p>

        <p className="task__six--text">
          2. All that{" "}
          <input
            name="value1"
            value={getValue.value1 || ""}
            onChange={valueEventListener}
            id="1"
            type="text"
            className="task__six--input"
          />{" "}
          the light is our kingdom.
        </p>
        <p className="task__six--text">
          3.The candle{" "}
          <input
            name="value2"
            value={getValue.value2 || ""}
            onChange={valueEventListener}
            id="2"
            type="text"
            className="task__six--input"
          />{" "}
          brightly in the dark room.
        </p>
        <p className="task__six--text">
          4. I felt a soft{" "}
          <input
            name="value3"
            value={getValue.value3 || ""}
            onChange={valueEventListener}
            id="3"
            type="text"
            className="task__six--input"
          />{" "}
          on my hand.
        </p>
        <p className="task__six--text">
          5. Water started to{" "}
          <input
            name="value4"
            value={getValue.value4 || ""}
            onChange={valueEventListener}
            id="4"
            type="text"
            className="task__six--input"
          />{" "}
          out of the pipe under the sink.
        </p>
        <p className="task__six--text">
          6. The view from the mountain top was{" "}
          <input
            name="value5"
            value={getValue.value5 || ""}
            onChange={valueEventListener}
            id="5"
            type="text"
            className="task__six--input"
          />{" "}
          .
        </p>
      </div>
    </>
  );
};

export default TaskSixThirdPage;
