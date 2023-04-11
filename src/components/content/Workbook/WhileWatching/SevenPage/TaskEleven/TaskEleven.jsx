import { useState } from "react";
import "./TaskEleven.css";
import firstImg from "../../../../../../assets/task11/first-img.jpg";
import twoImg from "../../../../../../assets/task11/second-img.jpg";
import threeImg from "../../../../../../assets/task11/three-img.jpg";
import fourImg from "../../../../../../assets/task11/four-img.jpg";
const TaskElevenSevenPage = (props) => {
  const [getValueTaskOne, setGetValueTaskOne] = useState(false);
  const [getValueTaskTwo, setGetValueTaskTwo] = useState(false);
  const [getValueTaskThree, setGetValueTaskThree] = useState(false);
  const [getValueTaskFour, setGetValueTaskFour] = useState(false);

  const valueEventListenerTaskOne = (event) => {
    setGetValueTaskOne(event.target.value);
  };
  const valueEventListenerTaskTwo = (event) => {
    setGetValueTaskTwo(event.target.value);
  };
  const valueEventListenerTaskThree = (event) => {
    setGetValueTaskThree(event.target.value);
  };
  const valueEventListenerTaskFour = (event) => {
    setGetValueTaskFour(event.target.value);
  };
  props.valueEventHandlerTask11(
    getValueTaskOne,
    getValueTaskTwo,
    getValueTaskThree,
    getValueTaskFour
  );

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">11. Watch 13:44-14:48</h3>
      </div>
      <div className="task__block--flex">
        <div className="first__column">
          <div className="block__item">
            <p className="text__question">{props.task11Data[0].question}</p>
            <img src={firstImg} alt="" className="img" />
            {props.task11Data[0].answers.map((item, index) => {
              return (
                <div key={item.id} className="text__task--eleven">
                  <input
                    className="checkbox__input"
                    type="radio"
                    onChange={valueEventListenerTaskOne}
                    id="contactChoice1"
                    name="one"
                    value={item.value}
                  />
                  <label className="text">{item.answer}</label>
                </div>
              );
            })}
          </div>
          <div className="block__item">
            <p className="text__question">{props.task11Data[1].question}</p>
            <img src={twoImg} alt="" className="img__two" />
            {props.task11Data[1].answers.map((item, index) => {
              return (
                <div key={item.id} className="text__task--eleven">
                  <input
                    className="checkbox__input"
                    type="radio"
                    onChange={valueEventListenerTaskTwo}
                    id="contactChoice1"
                    name="two"
                    value={item.value}
                  />
                  <label className="text">{item.answer}</label>
                </div>
              );
            })}
          </div>
        </div>
        <div className="second__column">
          <div className="block__item">
            <p className="text__question">{props.task11Data[2].question}</p>
            <img src={threeImg} alt="" className="img" />
            {props.task11Data[2].answers.map((item, index) => {
              return (
                <div key={item.id} className="text__task--eleven">
                  <input
                    className="checkbox__input"
                    type="radio"
                    onChange={valueEventListenerTaskThree}
                    id="contactChoice1"
                    name="three"
                    value={item.value}
                  />
                  <label className="text">{item.answer}</label>
                </div>
              );
            })}
          </div>
          <div className="block__item">
            <p className="text__question">{props.task11Data[3].question}</p>
            <img src={fourImg} alt="" className="img__two" />
            {props.task11Data[3].answers.map((item, index) => {
              return (
                <div key={item.id} className="text__task--eleven">
                  <input
                    className="checkbox__input"
                    type="radio"
                    onChange={valueEventListenerTaskFour}
                    id="contactChoice1"
                    name="four"
                    value={item.value}
                  />
                  <label className="text">{item.answer}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskElevenSevenPage;
