import "./FifteenPageTaskOne.css";
import { useDispatch } from "react-redux";
import { getValuePage15 } from "../../../../../store/actions";

const FifteenPageTaskOne = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.page15Task1Data];
    newInputValues[index].value = value;
    dispatch(getValuePage15(newInputValues));
  };
  props.valueHandlerAfter(props.page15Task1Data, props.page15Task1Result);
  return (
    <>
      <div className="task__title">
        <h3 className="task__title--text">Choose the right action</h3>
      </div>
      <div className="fifteen__page--task">
        {props.page15Task1Data.map((item, index) => {
          return (
            <p className="task__text">
              {item.textBefore}
              <input
                value={item.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                type="text"
                className="task__six--input"
              />{" "}
              {item.textAfter}{" "}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default FifteenPageTaskOne;
