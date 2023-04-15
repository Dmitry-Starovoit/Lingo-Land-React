import "./TaskNine.css";
import { useDispatch } from "react-redux";
import { getValueTask9 } from "../../../../../store/actions";
const TaskNineSixPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task9Data];
    newInputValues[index].value = value;
    dispatch(getValueTask9(newInputValues));
  };
  props.valueHandlerAfter(props.task9Data, props.task9Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          9.Watch 11:40-12:37 and complete the sentences
        </h3>
      </div>
      <div className="task__nine--block">
        {props.task9Data.map((item, index) => {
          return (
            <label key={index} className="task__text">
              {item.textBefore}
              <input
                value={item.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
              />
              {item.textAfter}
            </label>
          );
        })}
      </div>
    </>
  );
};

export default TaskNineSixPage;
