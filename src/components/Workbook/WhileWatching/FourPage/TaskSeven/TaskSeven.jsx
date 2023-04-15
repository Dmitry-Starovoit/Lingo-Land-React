import { useState } from "react";
import "./TaskSeven.css";
import imgScar from "../../../../../assets/task7/Scar.jpg";
import imgZazu from "../../../../../assets/task7/Zazu.jpg";
const TaskSevenFourPage = (props) => {
  const [getValue, setGetValue] = useState([]);

  const valueEventListener = (event) => {
    setGetValue({
      ...getValue,
      [event.target.name]: new String(event.target.value).toLowerCase(),
    });
  };
  const item = [
    { img: imgScar, text: "hello" },
    { img: imgZazu, text: "nnnnnn" },
    { img: imgScar, text: "0000000" },
  ];

  props.valueEventHandlerTask7(getValue);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          7. Make sentences in the correct form
        </h3>
      </div>
      <div className="block__tasks--seven">
        <div className="block1__task--seven block__task--seven block__number--one">
          <img src={imgZazu} alt="" />
          <div className="flex__text__block">
            <div className="flex__text--item1"></div>
            <div className="flex__text--item2">
              The king{" "}
              <input
                name="value0"
                value={getValue.value0 || ""}
                onChange={valueEventListener}
                id="0"
                type="text"
              />
              (approach, present simple) This is not a drill. His Majesty has/
              have{" "}
              <input
                name="value1"
                value={getValue.value1 || ""}
                onChange={valueEventListener}
                id="1"
                type="text"
              />{" "}
              an audience. ( request, present perfect) Upon his entrance, you{" "}
              <input
                name="value2"
                value={getValue.value2 || ""}
                onChange={valueEventListener}
                id="2"
                type="text"
              />{" "}
              and genuflect. (rise, future simple)
            </div>
          </div>
        </div>
        <div className="block2__task--seven block__task--seven block__number--two">
          <div className="flex__text__block">
            <div className="flex__text--item2">
              Zazu you{" "}
              <input
                name="value3"
                value={getValue.value3 || ""}
                onChange={valueEventListener}
                id="3"
                type="text"
              />{" "}
              me lose my lunch. ( make, present perfect )
            </div>
            <div className="flex__text--item3"></div>
          </div>
          <img src={imgScar} alt="" />
        </div>
        <div className="block1__task--seven block__task--seven block__number--three">
          <img src={imgZazu} alt="" />
          <div className="flex__text__block">
            <div className="flex__text--item1"></div>
            <div className="flex__text--item2">
              You{" "}
              <input
                name="value4"
                value={getValue.value4 || ""}
                onChange={valueEventListener}
                id="4"
                type="text"
              />{" "}
              to Mufasa ( answer, future simple) for missing the ceremony this
              morning.
            </div>
          </div>
        </div>
        <div className="block2__task--seven block__task--seven block__number--four">
          <div className="flex__text__block">
            <div className="flex__text--item2">I answer to no one.</div>
            <div className="flex__text--item3"></div>
          </div>
          <img src={imgScar} alt="" />
        </div>
        <div className="block1__task--seven block__task--seven block__number--five">
          <img src={imgZazu} alt="" />
          <div className="flex__text__block">
            <div className="flex__text--item1"></div>
            <div className="flex__text--item2">
              No, no (not to look){" "}
              <input
                name="value5"
                value={getValue.value5 || ""}
                onChange={valueEventListener}
                id="5"
                type="text"
              />{" "}
              at me like that. (present simple)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskSevenFourPage;
