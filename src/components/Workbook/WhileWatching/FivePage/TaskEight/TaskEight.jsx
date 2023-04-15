import "./TaskEight.css";
import { useDispatch } from "react-redux";
import { getValueTask8 } from "../../../../../store/actions";
const TaskEightFivePage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task8Data];
    newInputValues[index].value = value;
    dispatch(getValueTask8(newInputValues));
  };

  props.valueHandlerAfter(props.task8Data, props.task8Result);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          8. Watch 07:10-07:51 and put the sentence in the correct order
        </h3>
      </div>
      {props.task8Data.map((item, index) => {
        return (
          <div key={index} className="flex__text__block">
            <div key={Math.random()} className="text__block--eight">
              <p className="text__task--eight">{item.textData}</p>
            </div>
            <div className="input__block--eight">
              <div>
                <input
                  value={item.value}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  type="number"
                />
              </div>{" "}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskEightFivePage;
