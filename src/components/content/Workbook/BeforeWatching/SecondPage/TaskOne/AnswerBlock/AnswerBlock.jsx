import { useState } from "react";
const AnswerBlock = (props) => {
  const pageTwoData = [
    {
      x: 350,
      y: 1950,
      value: "LION CUB",
      maxX: 605,
      minX: 570,
      maxY: 2775,
      minY: 2780,
    },
    {
      x: 350,
      y: 2050,
      value: "BEE",
      maxX: 605,
      minX: 570,
      maxY: 2540,
      minY: 2500,
    },
    {
      x: 350,
      y: 2150,
      value: "BEAK",
      maxX: 605,
      minX: 570,
      maxY: 2305,
      minY: 2265,
    },
    {
      x: 350,
      y: 2250,
      value: "ANT",
      maxX: 860,
      minX: 820,
      maxY: 2540,
      minY: 2500,
    },
    {
      x: 350,
      y: 2350,
      value: "HYENA",
      maxX: 860,
      minX: 820,
      maxY: 2075,
      minY: 2035,
    },
    {
      x: 350,
      y: 2450,
      value: "PROTECT",
      maxX: 860,
      minX: 820,
      maxY: 2305,
      minY: 2265,
    },
    {
      x: 350,
      y: 2550,
      value: "POUNCE",
      maxX: 860,
      minX: 820,
      maxY: 2775,
      minY: 2735,
    },
    {
      x: 350,
      y: 2650,
      value: "HUNT",
      maxX: 605,
      minX: 570,
      maxY: 2075,
      minY: 2035,
    },
  ];

  const [coordinate, setCoordinate] = useState(pageTwoData);

  const handleInputChange = (index, x, y) => {
    const newInputValues = [...coordinate];
    newInputValues[index].x = x;
    newInputValues[index].y = y;
    setCoordinate(newInputValues);
  };

  props.checkAns(coordinate);

  return (
    <>
      {coordinate.map((item, index) => {
        return (
          <div
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
