import "./TaskTen.css";
import { useDispatch } from "react-redux";
import { getValueTask10 } from "../../../../../store/actions";
const TaskTenSixPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task10Data];
    newInputValues[index].value = value;
    dispatch(getValueTask10(newInputValues));
  };
  props.valueHandlerAfter(props.task10Data, props.task10Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          10.Watch 11:40-13:39 and find the translation to these phrases
        </h3>
      </div>
      {props.task10Data.map((item, index) => {
        return (
          <div key={index} className="task__block--ten">
            <p className="task__text">{item.textAfter}</p>
            <input
              value={item.value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              id={item.id}
              type="text"
            />
          </div>
        );
      })}
    </>
  );
};

export default TaskTenSixPage;
