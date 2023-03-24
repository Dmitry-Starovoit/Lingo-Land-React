import { useState } from "react";
import "./FirstPage.css";

const FirstPage = () => {
  const task1Ans = ["respect", "promise", "patrol", "slamming", "wise", "evil"];
  const task2DataColumnFirst = [
    { que: "Genuflect ", ans: "ставати на коліна" },
    { que: "Scar      ", ans: "ставати на коліна" },
    { que: "Perhaps   ", ans: "ставати на коліна" },
    { que: "Expel     ", ans: "ставати на коліна" },
    { que: "Intruder  ", ans: "ставати на коліна" },
    { que: "Belong    ", ans: "ставати на коліна" },
    { que: "Beyond    ", ans: "ставати на коліна" },
    { que: "Report    ", ans: "ставати на коліна" },
  ];

  const task2DataColumnSecond = [
    { que: "Lead      ", ans: "ставати на коліна" },
    { que: "Away      ", ans: "ставати на коліна" },
    { que: "Towards   ", ans: "ставати на коліна" },
    { que: "Majesty   ", ans: "ставати на коліна" },
    { que: "Buzz      ", ans: "ставати на коліна" },
    { que: "Reqest    ", ans: "ставати на коліна" },
    { que: "Hungry    ", ans: "ставати на коліна" },
    { que: "Tremendous", ans: "ставати на коліна" },
  ];

  const task3Data = [
    { que: "Багно", hint: "d m u", ans: "hhh" },
    { que: "Кладовище", hint: "a r g v e r y a d", ans: "hhh" },
    { que: "Існувати", hint: "i s x t e", ans: "hhh" },
    { que: "Благати", hint: "e g b", ans: "hhh" },
  ];
  let arr1 = [];
  const [getValue, setGetValue] = useState([]);
  const [changeText, setChangeText] = useState("");

  const changeTextFunc = () => {
    setChangeText(text11);
  };

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };
  let text11 = "";
  const valueEventHandler = () => {
    console.log(getValue.keys);
    if (task1Ans[0] === getValue.value0) {
      arr1.push(task1Ans[0]);
      arr1 = arr1;
    }
    if (task1Ans[1] === getValue.value1) {
      arr1.push(task1Ans[1]);
      arr1 = arr1;
    }
    if (task1Ans[2] === getValue.value2) {
      arr1.push(task1Ans[2]);
      arr1 = arr1;
    }
    if (task1Ans[3] === getValue.value3) {
      arr1.push(task1Ans[3]);
      arr1 = arr1;
    }
    if (task1Ans[4] === getValue.value4) {
      arr1.push(task1Ans[4]);
      arr1 = arr1;
    }
    if (task1Ans[5] === getValue.value5) {
      arr1.push(task1Ans[5]);
      arr1 = arr1;
    }
    const arr = new Set(arr1);
    text11 = `${arr.size} питань з ${task1Ans.length} правильно`;
    console.log(text11);
    changeTextFunc();
    return <h4></h4>;
  };

  return (
    <div className="page">
      <h1>Before Watching</h1>
      <div className="task__title">
        <h3 className="task__title--text">1. Fill in the gaps</h3>
      </div>
      <div className="task__one">
        <p className="task__text">
          I always show{" "}
          <input
            name="value0"
            value={getValue.value0}
            onChange={valueEventListener}
            id="0"
            type="text"
            className="input__text"
          />{" "}
          to my elders. She made a{" "}
          <input
            name="value1"
            value={getValue.value1}
            onChange={valueEventListener}
            id="1"
            type="text"
            className="input__text"
          />{" "}
          to meet me at the park. The{" "}
          <input
            name="value2"
            value={getValue.value2}
            onChange={valueEventListener}
            id="2"
            type="text"
            className="input__text"
          />{" "}
          car drove by our house every hour . He is a{" "}
          <input
            name="value3"
            value={getValue.value3}
            onChange={valueEventListener}
            id="3"
            type="text"
            className="input__text"
          />{" "}
          man who always offers good advice .{" "}
          <input
            name="value4"
            value={getValue.value4}
            onChange={valueEventListener}
            id="4"
            type="text"
            className="input__text"
          />{" "}
          the door won`t solve the problem. It`s important to avoid{" "}
          <input
            name="value5"
            value={getValue.value5}
            onChange={valueEventListener}
            id="5"
            type="text"
            className="input__text"
          />{" "}
          thoughts and actions.
        </p>

        <button onClick={valueEventHandler}>send</button>
        <h4> {changeText}</h4>
      </div>
      <div className="task__title">
        <h3 className="task__title--text">2. Translate the words</h3>
      </div>
      <div className="task__two">
        <div className="task__two--item">
          {task2DataColumnFirst.map((item) => {
            return (
              <div className="task__two--flex">
                <p>{item.que}</p>
                <input type="text" />
              </div>
            );
          })}
        </div>
        <div className="task__two--item">
          {task2DataColumnSecond.map((item) => {
            return (
              <div className="task__two--flex">
                <p>{item.que}</p>
                <input type="text" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="task__title">
        <h3 className="task__title--text">
          3. Put the letters in the correct order
        </h3>
      </div>
      <div className="task__three">
        <div className="task__three--item">
          {task3Data.map((item) => {
            return (
              <div>
                <p className="task__three--text">{item.que}</p>
                <p>{item.hint}</p>
                <input type="text" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
