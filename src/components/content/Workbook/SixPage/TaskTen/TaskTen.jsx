import { useState } from "react";
import "./TaskTen.css";
const TaskTenSixPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  //props.valueEventHandlerTask10(getValue);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          10.Watch 11:40-13:39 and find the translation to these phrases
        </h3>
      </div>
      <div className="task__block--ten">
        <p className="task__text">
          Все, до чого торкається світло, це наше царство
        </p>
        <input
          name="value0"
          value={getValue.value0 || ""}
          onChange={valueEventListener}
          id="input__task10--0"
          type="text"
        />
        <p className="task__text">Все це буде належати мені?</p>
        <input
          name="value1"
          value={getValue.value1 || ""}
          onChange={valueEventListener}
          id="input__task10--1"
          type="text"
        />
        <p className="task__text">
          Справжній король шукає те, що він може дати.
        </p>
        <input
          name="value2"
          value={getValue.value2 || ""}
          onChange={valueEventListener}
          id="input__task10--2"
          type="text"
        />
        <p className="task__text">
          Коли ми вмираємо, наші тіла стають травою і антилопи, їдять траву...
        </p>
        <input
          name="value3"
          value={getValue.value3 || ""}
          onChange={valueEventListener}
          id="input__task10--3"
          type="text"
        />
      </div>
    </>
  );
};

export default TaskTenSixPage;
