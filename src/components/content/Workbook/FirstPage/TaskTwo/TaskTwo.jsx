import { useState } from "react";

const TaskTwoFirstPage = (props) => {
  const task2DataColumnFirst = [
    { que: "Genuflect ", ans: "ставати на коліна" },
    { que: "Scar      ", ans: "шрам" },
    { que: "Perhaps   ", ans: "можливо" || "мабуть" },
    { que: "Expel     ", ans: "вигнати" || "виключити" },
    { que: "Intruder  ", ans: "незваний гість" },
    { que: "Belong    ", ans: "належати" },
    { que: "Beyond    ", ans: "за межами" || "поза" },
    { que: "Report    ", ans: "доповідь" },
  ];

  const task2DataColumnSecond = [
    { que: "Lead      ", ans: "вести" || "очолювати" },
    { que: "Away      ", ans: "далеко" },
    { que: "Towards   ", ans: "в напрямку" || "до" || "на зустріч" },
    { que: "Majesty   ", ans: "величність" },
    { que: "Buzz      ", ans: "жужати" },
    { que: "Reqest    ", ans: "запит" || "прохання" },
    { que: "Hungry    ", ans: "голодний" },
    { que: "Tremendous", ans: "величезний" },
  ];

  const task2Data = [...task2DataColumnFirst, ...task2DataColumnSecond];
  const task2Ans = task2Data.map((obj) => obj.ans);

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
      task2Result.size < 16
        ? `${task2Result.size} питань з ${task2Ans.length} правильно`
        : `Все вірно`
    );
  };

  const valueEventHandler = () => {
    for (let i = 0; i <= task2Ans.length; i++) {
      if (
        task2Ans[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        task2Result.add(task2Ans[i]);
      }
    }
    changeTextFunc();
  };

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">2. Translate the words</h3>
      </div>
      <div className="task__two">
        <div className="task__two--item">
          <div className="task__two--flex">
            <div className="task__two--text">
              {task2DataColumnFirst.map((item) => {
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
              {task2DataColumnSecond.map((item) => {
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
      <button onClick={valueEventHandler}>send</button>
      <h4> {changeText}</h4>
    </>
  );
};

export default TaskTwoFirstPage;
