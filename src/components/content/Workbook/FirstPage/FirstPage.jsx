import { useState } from "react";
import "./FirstPage.css";
import TaskOneFirstPage from "./TaskOne/TaskOne";
import TaskThreeFirstPage from "./TaskThree/TaskThree";
import TaskTwoFirstPage from "./TaskTwo/TaskTwo";

const FirstPage = () => {
  const task1Ans = ["respect", "promise", "patrol", "slamming", "wise", "evil"];
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

  const task3Data = [
    { que: "Багно", hint: "d m u", ans: "mud" },
    { que: "Кладовище", hint: "a r g v e r y a d", ans: "graveyard" },
    { que: "Існувати", hint: "i s x t e", ans: "exist" },
    { que: "Благати", hint: "e g b", ans: "beg" },
  ];

  const task2Data = [...task2DataColumnFirst, ...task2DataColumnSecond];
  const task2Ans = task2Data.map((obj) => obj.ans);
  const task3Ans = task3Data.map((obj) => obj.ans);

  let task1Result = new Set();
  let task2Result = new Set();
  let task3Result = new Set();

  const [changeTextTask1, setChangeTextTask1] = useState("");
  const [changeTextTask2, setChangeTextTask2] = useState("");
  const [changeTextTask3, setChangeTextTask3] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      task1Result.size < 6
        ? `Correct ${task1Result.size}/${task1Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask2(
      task2Result.size < 16
        ? `Correct ${task2Result.size}/${task2Ans.length}`
        : `All are correct!`
    );
    setChangeTextTask3(
      task3Result.size < 4
        ? `Correct ${task3Result.size}/${task3Ans.length}`
        : `All are correct!`
    );
  };

  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
        console.log(taskResult);
      }
    }
  };

  const valueEventHandlerTask1 = (getValue) => {
    valueHandler(task1Ans, task1Result, getValue);
  };
  const valueEventHandlerTask2 = (getValue) => {
    valueHandler(task2Ans, task2Result, getValue);
  };
  const valueEventHandlerTask3 = (getValue) => {
    valueHandler(task3Ans, task3Result, getValue);
  };

  return (
    <div className="page">
      <h1>Before Watching</h1>
      <TaskOneFirstPage valueEventHandler={valueEventHandlerTask1} />
      <h4> {changeTextTask1}</h4>
      <TaskTwoFirstPage
        task2DataColumnFirst={task2DataColumnFirst}
        task2DataColumnSecond={task2DataColumnSecond}
        valueEventHandler={valueEventHandlerTask2}
      />
      <h4> {changeTextTask2}</h4>
      <TaskThreeFirstPage
        task3Data={task3Data}
        valueEventHandler={valueEventHandlerTask3}
      />
      <h4>{changeTextTask3}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check answers</button>
      </div>
    </div>
  );
};

export default FirstPage;
