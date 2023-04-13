import "./TaskOne.css";
import ImagesBlock from "./ImagesBlock/ImagesBlock";
import AnswerBlock from "./AnswerBlock/AnswerBlock";

const TaskOneSecondPage = (props) => {
  return (
    <>
      <div className="page__two">
        <div className="task__title">
          <h3 className="task__title--text">
            4. Match the pictures with the words
          </h3>
          <ImagesBlock images={props.images} />
          <AnswerBlock twoData={props.twoData} checkAns={props.checkAns} />
        </div>
      </div>
    </>
  );
};

export default TaskOneSecondPage;
