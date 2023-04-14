import "./TaskTwo.css";
import { useDispatch } from "react-redux";
import { getValueTask2 } from "../../../../../store/actions";

const TaskTwoFirstPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange1 = (index, value) => {
    const newInputValues = [...props.task2DataColumnFirst];
    newInputValues[index].value = value;
    dispatch(getValueTask2(newInputValues));
  };

  const handleInputChange2 = (index, value) => {
    const newInputValues = [...props.task2DataColumnSecond];
    newInputValues[index].value = value;
    dispatch(getValueTask2(newInputValues));
  };

  props.valueHandlerAfter(props.task2DataColumnFirst, props.task2ResultFirst);
  props.valueHandlerAfter(props.task2DataColumnSecond, props.task2ResultSecond);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">2. Translate the words</h3>
      </div>
      <div className="task__two">
        <div className="task__two--item">
          {props.task2DataColumnFirst.map((item, index) => {
            return (
              <div key={item.id} className="task__two--flex">
                <div className="task__two--text">
                  <p>{item.que}</p>
                </div>
                <div className="task__two--input">
                  <input
                    name="value0"
                    value={item.value}
                    onChange={(e) => handleInputChange1(index, e.target.value)}
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="task__two--item">
          {props.task2DataColumnSecond.map((item, index) => {
            return (
              <div key={item.id} className="task__two--flex">
                <div className="task__two--text">
                  <p>{item.que}</p>
                </div>
                <div className="task__two--input">
                  <input
                    name="value0"
                    value={item.value}
                    onChange={(e) => handleInputChange2(index, e.target.value)}
                    type="text"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskTwoFirstPage;
