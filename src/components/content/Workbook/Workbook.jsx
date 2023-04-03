import HeaderPage from "./Header/HeaderPage";
import FirstPage from "./FirstPage/FirstPage";
import "./Workbook.css";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourPage from "./FourPage/FourPage";
import FivePage from "./FivePage/FivePage";
import SixPage from "./SixPage/SixPage";
const Workbook = function () {
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
      }
    }
  };
  return (
    <div className="content__workbook">
      <HeaderPage />
      <FirstPage
        valueHandler={valueHandler}
        task1Ans={task1Ans}
        task2DataColumnFirst={task2DataColumnFirst}
        task2DataColumnSecond={task2DataColumnSecond}
        task3Data={task3Data}
      />
      <SecondPage />
      <ThirdPage />
      <FourPage />
      <FivePage />
      <SixPage />
    </div>
  );
};

export default Workbook;
