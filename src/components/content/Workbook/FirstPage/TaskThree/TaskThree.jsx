import { useState } from "react";

const TaskThreeFirstPage = (props) => {
  const task3Data = [
    { que: "Багно", hint: "d m u", ans: "mud" },
    { que: "Кладовище", hint: "a r g v e r y a d", ans: "graveyard" },
    { que: "Існувати", hint: "i s x t e", ans: "exist" },
    { que: "Благати", hint: "e g b", ans: "beg" },
  ];

  const task3Ans = task3Data.map((obj) => obj.ans);

  const [getValue, setGetValue] = useState([]);
  const [changeText, setChangeText] = useState("");
  let task2Result = new Set();

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };

  const changeTextFunc = () => {
    setChangeText(
      task2Result.size < 4
        ? `${task2Result.size} питань з ${task3Ans.length} правильно`
        : `Все вірно`
    );
  };

  const valueEventHandler = () => {
    for (let i = 0; i <= task3Ans.length; i++) {
      if (
        task3Ans[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        task2Result.add(task3Ans[i]);
      }
    }
    changeTextFunc();
  };
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          3. Put the letters in the correct order
        </h3>
      </div>
      <div className="task__three">
        <div className="task__three--item">
          {task3Data.map((item) => {
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
      <button onClick={valueEventHandler}>send</button>
      <h4> {changeText}</h4>
    </>
  );
};

export default TaskThreeFirstPage;
