import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";

const BeforeWatching = () => {
  const task1Ans = ["respect", "promise", "patrol", "slamming", "wise", "evil"];
  const task2DataColumnFirst = [
    { que: "Genuflect ", ans: "ставати на коліна", id: 0 },
    { que: "Scar      ", ans: "шрам", id: 1 },
    { que: "Perhaps   ", ans: "можливо" || "мабуть", id: 2 },
    { que: "Expel     ", ans: "вигнати" || "виключити", id: 3 },
    { que: "Intruder  ", ans: "незваний гість", id: 4 },
    { que: "Belong    ", ans: "належати", id: 5 },
    { que: "Beyond    ", ans: "за межами" || "поза", id: 6 },
    { que: "Report    ", ans: "доповідь", id: 7 },
  ];

  const task2DataColumnSecond = [
    { que: "Lead      ", ans: "вести" || "очолювати", id: 8 },
    { que: "Away      ", ans: "далеко", id: 9 },
    { que: "Towards   ", ans: "в напрямку" || "до" || "на зустріч", id: 10 },
    { que: "Majesty   ", ans: "величність", id: 11 },
    { que: "Buzz      ", ans: "жужати", id: 12 },
    { que: "Reqest    ", ans: "запит" || "прохання", id: 13 },
    { que: "Hungry    ", ans: "голодний", id: 14 },
    { que: "Tremendous", ans: "величезний", id: 15 },
  ];

  const task3Data = [
    { que: "Багно", hint: "d m u", ans: "mud", id: 0 },
    { que: "Кладовище", hint: "a r g v e r y a d", ans: "graveyard", id: 1 },
    { que: "Існувати", hint: "i s x t e", ans: "exist", id: 2 },
    { que: "Благати", hint: "e g b", ans: "beg", id: 3 },
  ];
  const valueHandler = (taskAns, taskResult, getValue) => {
    for (let i = 0; i <= taskAns.length; i++) {
      if (
        taskAns[i] === getValue[`value${i}`] &&
        getValue[`value${i}`] !== undefined
      ) {
        taskResult.add(taskAns[i]);
        console.log(taskResult);
      } else {
        taskResult.delete(taskAns[i]);
      }
    }
  };

  //////////SecondPage//////////

  const result = new Set();

  const checkAns = (pageTwoData) => {
    for (let i = 0; i < pageTwoData.length; i++) {
      if (
        pageTwoData[i].x <= pageTwoData[i].maxX &&
        pageTwoData[i].x >= pageTwoData[i].minX &&
        pageTwoData[i].y <= pageTwoData[i].maxY &&
        pageTwoData[i].y >= pageTwoData[i].minY
      ) {
        result.add(i);
      } else {
        result.delete(i);
      }
    }
  };

  //////////ThirdPage//////////

  const task5Ans = ["mud", "den", "evil", "scraps", "disrespect", "precious"];
  const task6Ans = [
    "incredible",
    "touch",
    "burn",
    "touch",
    "ooze",
    "incredible",
  ];
  let task5Result = new Set();
  let task6Result = new Set();

  const valueEventHandlerTask5 = (getValue) => {
    valueHandler(task5Ans, task5Result, getValue);
  };
  const valueEventHandlerTask6 = (getValue) => {
    valueHandler(task6Ans, task6Result, getValue);
  };
  return (
    <>
      <FirstPage
        valueHandler={valueHandler}
        task1Ans={task1Ans}
        task2DataColumnFirst={task2DataColumnFirst}
        task2DataColumnSecond={task2DataColumnSecond}
        task3Data={task3Data}
      />
      <SecondPage result={result} checkAns={checkAns} />
      <ThirdPage
        valueHandler={valueHandler}
        task5Ans={task5Ans}
        task6Ans={task6Ans}
        task5Result={task5Result}
        task6Result={task6Result}
        valueEventHandlerTask5={valueEventHandlerTask5}
        valueEventHandlerTask6={valueEventHandlerTask6}
      />
    </>
  );
};

export default BeforeWatching;
