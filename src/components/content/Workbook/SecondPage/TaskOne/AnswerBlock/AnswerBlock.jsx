import { useState } from "react";
const AnswerBlock = (props) => {
  const [xBlockOne, setXBlockOne] = useState(350);
  const [yBlockOne, setYBlockOne] = useState(1950);
  const [xBlockTwo, setXBlockTwo] = useState(350);
  const [yBlockTwo, setYBlockTwo] = useState(2010);
  const [xBlockThree, setXBlockThree] = useState(350);
  const [yBlockThree, setYBlockThree] = useState(2070);
  const [xBlockFour, setXBlockFour] = useState(350);
  const [yBlockFour, setYBlockFour] = useState(2130);
  const [xBlockFive, setXBlockFive] = useState(350);
  const [yBlockFive, setYBlockFive] = useState(2190);
  const [xBlockSix, setXBlockSix] = useState(350);
  const [yBlockSix, setYBlockSix] = useState(2250);
  const [xBlockSeven, setXBlockSeven] = useState(350);
  const [yBlockSeven, setYBlockSeven] = useState(2310);
  const [xBlockNine, setXBlockNine] = useState(350);
  const [yBlockNine, setYBlockNine] = useState(2370);

  const handleDragEndOne = (event) => {
    setXBlockOne(event.pageX);
    setYBlockOne(event.pageY);
    console.log(event.pageX, event.pageY);
  };

  const handleDragEndTwo = (event) => {
    setXBlockTwo(event.pageX);
    setYBlockTwo(event.pageY);
    console.log(xBlockTwo, yBlockTwo);
  };

  const handleDragEndThree = (event) => {
    setXBlockThree(event.pageX);
    setYBlockThree(event.pageY);
    console.log(event.pageX, event.pageX);
  };

  const handleDragEndFour = (event) => {
    setXBlockFour(event.pageX);
    setYBlockFour(event.pageY);
    console.log(event.pageX, event.pageX);
  };

  const handleDragEndFive = (event) => {
    setXBlockFive(event.pageX);
    setYBlockFive(event.pageY);
    console.log(event.pageX, event.pageY);
  };

  const handleDragEndSix = (event) => {
    setXBlockSix(event.pageX);
    setYBlockSix(event.pageY);
    console.log(event.pageX, event.pageX);
  };

  const handleDragEndSeven = (event) => {
    setXBlockSeven(event.pageX);
    setYBlockSeven(event.pageY);
    console.log(event.pageX, event.pageX);
  };

  const handleDragEndNine = (event) => {
    event.preventDefault();
    setXBlockNine(event.pageX);
    setYBlockNine(event.pageY);
    console.log(event.pageX, event.pageX);
  };

  props.checkAns(
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
  );
  return (
    <>
      <div
        style={{
          left: xBlockOne,
          top: yBlockOne,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndOne}
      >
        LION CUB
      </div>
      <div
        style={{
          left: xBlockTwo,
          top: yBlockTwo,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndTwo}
      >
        BEE
      </div>
      <div
        style={{
          left: xBlockThree,
          top: yBlockThree,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndThree}
      >
        BEAK
      </div>
      <div
        style={{
          left: xBlockFour,
          top: yBlockFour,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndFour}
      >
        ANT
      </div>
      <div
        style={{
          left: xBlockFive,
          top: yBlockFive,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndFive}
      >
        HYENA
      </div>
      <div
        style={{
          left: xBlockSix,
          top: yBlockSix,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndSix}
      >
        PROTECT
      </div>
      <div
        style={{
          left: xBlockSeven,
          top: yBlockSeven,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndSeven}
      >
        POUNCE
      </div>
      <div
        style={{
          left: xBlockNine,
          top: yBlockNine,
        }}
        className="block--89"
        draggable={true}
        onDragEnd={handleDragEndNine}
      >
        HUNT
      </div>
    </>
  );
};

export default AnswerBlock;
