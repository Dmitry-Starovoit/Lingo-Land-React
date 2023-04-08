import { useState } from "react";
import "./TaskNine.css";
const TaskNineSixPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  props.valueEventHandlerTask9(getValue);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          9.Watch 11:40-12:37 and complete the sentences
        </h3>
      </div>
      <div className="task__nine--block">
        <p className="task__text">
          So, what's first? Give orders for the{" "}
          <input
            name="value0"
            value={getValue.value0 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
          />
          ?{" "}
          <input
            name="value1"
            value={getValue.value1 || ""}
            onChange={valueEventListener}
            id="1"
            type="text"
          />{" "}
          away evil{" "}
          <input
            name="value2"
            value={getValue.value2 || ""}
            onChange={valueEventListener}
            id="2"
            type="text"
          />
          ? Dad! You're going the wrong way! Dad? I'm not supposed to{" "}
          <input
            name="value3"
            value={getValue.value3 || ""}
            onChange={valueEventListener}
            id="3"
            type="text"
          />{" "}
          up here. Look, Simba. Everything the light touches is our{" "}
          <input
            name="value4"
            value={getValue.value4 || ""}
            onChange={valueEventListener}
            id="4"
            type="text"
          />
          . You rule all of that? Yes. But a king's{" "}
          <input
            name="value5"
            value={getValue.value5 || ""}
            onChange={valueEventListener}
            id="5"
            type="text"
          />{" "}
          as ruler rises and falls like the sun. One day, Simba the sun will{" "}
          <input
            name="value6"
            value={getValue.value6 || ""}
            onChange={valueEventListener}
            id="6"
            type="text"
          />
          on my time here and will rise with you as the new king. All of this
          will{" "}
          <input
            name="value7"
            value={getValue.value7 || ""}
            onChange={valueEventListener}
            id="7"
            type="text"
          />
          to me? It belongs to no one, but will be yours to{" "}
          <input
            name="value8"
            value={getValue.value8 || ""}
            onChange={valueEventListener}
            id="8"
            type="text"
          />
          .
        </p>
      </div>
    </>
  );
};

export default TaskNineSixPage;
