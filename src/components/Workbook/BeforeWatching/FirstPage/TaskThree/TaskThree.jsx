import "./TaskThree.css";
import { useDispatch } from "react-redux";
import { getValueTask3 } from "../../../../../store/actions";

const TaskThreeFirstPage = (props) => {
  const dispatch = useDispatch();
  const handleInputChange = (index, value) => {
    const newInputValues = [...props.task3Data];
    newInputValues[index].value = value;
    dispatch(getValueTask3(newInputValues));
  };
  props.valueHandlerAfter(props.task3Data, props.task3Result);

  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">
          3. Put the letters in the correct order
        </h3>
      </div>
      <div className="task__three">
        {props.task3Data.map((item, index) => {
          return (
            <label key={index}>
              <div key={item.id}>
                <div className="task__three--item">
                  <div key={item.id} className="items">
                    <p className="task__three--text">{item.que}</p>
                    <p>{item.hint}</p>
                  </div>
                </div>
                <div className="items__value">
                  <input
                    name="value0"
                    value={item.value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    type="text"
                  />{" "}
                </div>
              </div>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default TaskThreeFirstPage;
