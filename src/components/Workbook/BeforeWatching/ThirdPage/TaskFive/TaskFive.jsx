import { useDispatch } from "react-redux";
import "./TaskFive.css";
import { getValueTask5 } from "../../../../../store/actions";
const TaskFiveThirdPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task5Data];
    newInputValues[index].value = value;
    dispatch(getValueTask5(newInputValues));
  };

  props.valueHandlerAfter(props.task5Data, props.task5Result);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">5. Guess what it is</h3>
      </div>
      <div className="task__five">
        {props.task5Data.map((item, index) => {
          return (
            <label key={index}>
              <p className="task__five--text">{item.question}</p>
              <input
                value={item.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
                className="task__five--input"
              />
            </label>
          );
        })}
      </div>
    </>
  );
};

export default TaskFiveThirdPage;
