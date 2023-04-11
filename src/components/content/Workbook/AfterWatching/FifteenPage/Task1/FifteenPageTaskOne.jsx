import { useState } from "react";
import "./FifteenPageTaskOne.css";

const FifteenPageTaskOne = (props) => {
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
        <h3 className="task__title--text">Choose the right action</h3>
      </div>
      <div className="fifteen__page--task">
        <p className="task__text">
          1. What{" "}
          <input
            name="value0"
            value={getValue.value0 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          Simba and Nala do every dat? (do / does )
        </p>
        <p className="task__text">
          2. Zazy{" "}
          <input
            name="value1"
            value={getValue.value1 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          he king`s advisor. (is/ are)
        </p>
        <p className="task__text">
          3. Scar{" "}
          <input
            name="value2"
            value={getValue.value2 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          to be the next king of Pride Land. (want/ wants)
        </p>
        <p className="task__text">
          4. Mufasa{" "}
          <input
            name="value3"
            value={getValue.value3 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          Simba how to be a good king. (teach/ teaches)
        </p>
        <p className="task__text">
          5. The sun{" "}
          <input
            name="value4"
            value={getValue.value4 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          in the sky every day. (rise/ rises)
        </p>
        <p className="task__text">
          6. Simba and Nala{" "}
          <input
            name="value5"
            value={getValue.value5 || ""}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="task__six--input"
          />{" "}
          to explore the elephant graveyard. (want / wants)
        </p>
      </div>
    </>
  );
};

export default FifteenPageTaskOne;
