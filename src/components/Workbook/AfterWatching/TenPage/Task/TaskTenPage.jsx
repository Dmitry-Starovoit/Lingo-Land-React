import "./TaskTenPage.css";
import img from "../../../../../assets/after_watching/img-1.png";
import { useDispatch } from "react-redux";
import { addResultTask10, getValuePage10 } from "../../../../../store/actions";

const TaskTenPage = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, value) => {
    const newInputValues = [...props.page10Data];
    newInputValues[index].value = value;
    dispatch(getValuePage10(newInputValues));
  };

  props.valueHandlerAfter(props.page10Data, props.page10Result);

  return (
    <>
      {props.page10Data.map((value, index) => (
        <div key={index} className="block__ten--page">
          <p>{value.text}</p>
          <input
            type="text"
            value={value.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
          <img src={img} alt="" />
        </div>
      ))}
    </>
  );
};

export default TaskTenPage;
