import "./TaskElevenPage.css";
import img from "../../../../../assets/after_watching/img-1.png";
import { useDispatch } from "react-redux";
import { getValuePage11 } from "../../../../../store/actions";

const TaskElevenPage = (props) => {
  const dispatch = useDispatch();
  const handleInputChange = (index, value) => {
    const newInputValues = [...props.page11Data];
    newInputValues[index].value = value;
    dispatch(getValuePage11(newInputValues));
  };

  props.valueHandlerAfter(props.page11Data, props.page11Result);

  return (
    <>
      {props.page11Data.map((value, index) => (
        <div key={index} className="block__eleven--page">
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

export default TaskElevenPage;
