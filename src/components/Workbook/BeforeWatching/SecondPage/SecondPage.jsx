import "./SecondPage.css";
import TaskOneSecondPage from "./TaskOne/TaskOne";
import img1 from "../../../../assets/task4/1.jpg";
import img2 from "../../../../assets/task4/2.jpg";
import img3 from "../../../../assets/task4/3.jpg";
import img4 from "../../../../assets/task4/4.jpg";
import img5 from "../../../../assets/task4/5.jpg";
import img6 from "../../../../assets/task4/6.jpg";
import img7 from "../../../../assets/task4/7.jpg";
import img8 from "../../../../assets/task4/8.jpg";

import { useState } from "react";
const SecondPage = (props) => {
  const twoData = props.state.coordinateReducer.coordinate;
  const images = [
    [
      { img: img1, id: 1 },
      { img: img2, id: 2 },
      { img: img3, id: 3 },
      { img: img4, id: 4 },
    ],
    [
      { img: img5, id: 5 },
      { img: img6, id: 6 },
      { img: img7, id: 7 },
      { img: img8, id: 8 },
    ],
  ];

  const [changeTextTask1, setChangeTextTask1] = useState("");

  const changeTextFunc = () => {
    setChangeTextTask1(
      props.result.size < 8
        ? `Correct ${props.result.size}/${twoData.length}`
        : `All are correct!`
    );
  };

  return (
    <div className="page__second">
      <h1>Before Watching</h1>
      <TaskOneSecondPage
        twoData={twoData}
        images={images}
        checkAns={props.checkAns}
      />
      <h4>{changeTextTask1}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check Answer</button>
      </div>
    </div>
  );
};

export default SecondPage;
