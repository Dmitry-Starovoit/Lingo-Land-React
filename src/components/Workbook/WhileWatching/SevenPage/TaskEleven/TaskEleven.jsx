import { useDispatch } from "react-redux";
import "./TaskEleven.css";
import { getValueTask11First } from "../../../../../store/actions";
import { getValueTask11Second } from "../../../../../store/actions";

const TaskElevenSevenPage = (props) => {
  const dispatch = useDispatch();
  const valueEventListenerTaskOne1 = (event) => {
    if (event.target.value === "true") {
      dispatch(
        getValueTask11First(props.task11ResultFirst.add(event.target.id))
      );
    } else {
      dispatch(
        getValueTask11First(props.task11ResultFirst.delete(event.target.id))
      );
    }
  };
  const valueEventListenerTaskOne2 = (event) => {
    if (event.target.value === "true") {
      dispatch(
        getValueTask11Second(props.task11ResultSecond.add(event.target.id))
      );
    } else {
      dispatch(
        getValueTask11Second(props.task11ResultSecond.delete(event.target.id))
      );
    }
  };

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">11. Watch 13:44-14:48</h3>
      </div>
      <div className="task__block--flex">
        <div className="first__column">
          {props.task11ColumnFirst.map((items, index) => {
            return (
              <div key={index} className="block__item">
                <p className="text__question">{items.questionText}</p>
                <img src={items.image} alt="" className="img" />
                {items.answerOptions.map((items, index) => {
                  return (
                    <div key={index} className="text__task--eleven">
                      <input
                        className="checkbox__input"
                        type="radio"
                        onChange={valueEventListenerTaskOne1}
                        id={items.id}
                        name={items.id}
                        value={items.isCorrect}
                      />
                      <label className="text">{items.answerText}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="second__column">
          {props.task11ColumnSecond.map((items, index) => {
            return (
              <div key={index} className="block__item">
                <p className="text__question">{items.questionText}</p>
                <img src={items.image} alt="" className="img" />
                {items.answerOptions.map((items, index) => {
                  return (
                    <div key={index} className="text__task--eleven">
                      <input
                        className="checkbox__input"
                        type="radio"
                        onChange={valueEventListenerTaskOne2}
                        id={items.id}
                        name={items.id}
                        value={items.isCorrect}
                      />
                      <label className="text">{items.answerText}</label>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskElevenSevenPage;
