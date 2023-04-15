import "./TaskSix.css";
import { useDispatch } from "react-redux";
import { getValueTask6 } from "../../../../../store/actions";
const TaskSixThirdPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task6Data];
    newInputValues[index].value = value;
    dispatch(getValueTask6(newInputValues));
  };
  props.valueHandlerAfter(props.task6Data, props.task6Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          6. Complete the sentences with word from the list
        </h3>
      </div>
      <ul className="answer__block--six">
        <li>burn</li>
        <li>touch(2)</li>
        <li>incredible(2)</li>
        <li>ooze</li>
      </ul>
      <div className="task__six">
        {props.task6Data.map((item, index) => {
          return (
            <p className="task__six--text" key={index}>
              {item.textBefore}
              <input
                value={item.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
                className="task__six--input"
              />{" "}
              {item.textAfter}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default TaskSixThirdPage;
