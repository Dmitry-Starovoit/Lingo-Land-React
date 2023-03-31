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
const SecondPage = () => {
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

  const result = new Set();

  const changeTextFunc = () => {
    setChangeTextTask1(
      result.size < 8 ? `Correct ${result.size}/${"8"}` : `All are correct!`
    );
    console.log(result.length);
  };

  const checkAns = (
    xBlockOne,
    yBlockOne,
    xBlockTwo,
    yBlockTwo,
    xBlockThree,
    yBlockThree,
    xBlockFour,
    yBlockFour,
    xBlockFive,
    yBlockFive,
    xBlockSix,
    yBlockSix,
    xBlockSeven,
    yBlockSeven,
    xBlockNine,
    yBlockNine
  ) => {
    if (
      xBlockOne <= 615 &&
      xBlockOne >= 570 &&
      yBlockOne <= 2778 &&
      yBlockOne >= 2738
    ) {
      console.log("1");
      result.add("one");
    }
    if (
      xBlockTwo <= 606 &&
      xBlockTwo >= 566 &&
      yBlockTwo <= 2540 &&
      yBlockTwo >= 2500
    ) {
      console.log("2");
      result.add("two");
    }
    if (
      xBlockThree <= 607 &&
      xBlockThree >= 567 &&
      yBlockThree <= 2307 &&
      yBlockThree >= 2267
    ) {
      console.log("3");
      result.add("three");
    }
    if (
      xBlockFour <= 858 &&
      xBlockFour >= 818 &&
      yBlockFour <= 2543 &&
      yBlockFour >= 2503
    ) {
      console.log("4");
      result.add("four");
    }
    if (
      xBlockFive <= 859 &&
      xBlockFive >= 819 &&
      yBlockFive <= 2072 &&
      yBlockFive >= 2032
    ) {
      console.log("5");
      result.add("five");
    }
    if (
      xBlockSix <= 856 &&
      xBlockSix >= 816 &&
      yBlockSix <= 2305 &&
      yBlockSix >= 2265
    ) {
      console.log("6");
      result.add("six");
    }
    if (
      xBlockSeven <= 860 &&
      xBlockSeven >= 820 &&
      yBlockSeven <= 2775 &&
      yBlockSeven >= 2735
    ) {
      console.log("7");
      result.add("seven");
    }
    if (
      xBlockNine <= 608 &&
      xBlockNine >= 568 &&
      yBlockNine <= 2072 &&
      yBlockNine >= 2032
    ) {
      console.log("8");
      result.add("eight");
    }
  };

  return (
    <div className="page">
      <h1>Before Watching</h1>
      <TaskOneSecondPage images={images} checkAns={checkAns} />
      <h4>{changeTextTask1}</h4>
      <div className="button__div">
        <button onClick={changeTextFunc}>Check Answer</button>
      </div>
    </div>
  );
};

export default SecondPage;
