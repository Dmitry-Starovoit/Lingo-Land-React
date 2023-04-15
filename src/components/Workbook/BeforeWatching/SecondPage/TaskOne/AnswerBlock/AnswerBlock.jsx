import { useDispatch } from "react-redux";
import { setCoordinate } from "../../../../../../store/actions";

const AnswerBlock = (props) => {
  const dispatch = useDispatch();

  const handleInputChange = (index, x, y) => {
    const newInputValues = [...props.twoData];
    newInputValues[index].x = x;
    newInputValues[index].y = y;
    dispatch(setCoordinate(newInputValues));
  };
  props.checkAns(props.twoData, props.result);

  return (
    <>
      {props.twoData.map((item, index) => {
        return (
          <div
            key={item.id}
            style={{
              left: item.x,
              top: item.y,
            }}
            className="block--89"
            draggable={true}
            onDragEnd={(event) =>
              handleInputChange(index, event.pageX, event.pageY)
            }
          >
            {item.value}
          </div>
        );
      })}
    </>
  );
};

export default AnswerBlock;
