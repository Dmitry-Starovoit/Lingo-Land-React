import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

import "./Feedback.css";
const Feedback = () => {
  const images = [
    {
      ukr: "бенкет, святкування",
      eng: "feast",
    },
    {
      ukr: "шматок, частина, недоїдки",
      eng: "scrap",
    },
    {
      ukr: "величність",
      eng: "majesty",
    },
    {
      ukr: "запит, прохання",
      eng: "reqest",
    },
    {
      ukr: "вхід, вступ",
      eng: "entrance",
    },
    {
      ukr: "ставати на коліна",
      eng: "genuflect",
    },
    {
      ukr: "шрам",
      eng: "scar",
    },
    {
      ukr: "мабуть, можливо",
      eng: "perhaps",
    },
    {
      ukr: "неповага",
      eng: "disrespect",
    },
    {
      ukr: "повага",
      eng: "respect",
    },
    {
      ukr: "в напрямку, до, назустріч",
      eng: "towards",
    },
    {
      ukr: "величезний",
      eng: "tremendous",
    },
    {
      ukr: "дорогоцінний",
      eng: "precious",
    },
    {
      ukr: "мудрий",
      eng: "wise",
    },
    {
      ukr: "ударити",
      eng: "slam",
    },
    {
      ukr: "дзьоб",
      eng: "beak",
    },
    {
      ukr: "охороняти",
      eng: "patrol",
    },
    {
      ukr: "обіцяти",
      eng: "promise",
    },
    {
      ukr: "виключити, вигнати",
      eng: "expel",
    },
    {
      ukr: "полювання",
      eng: "hunt",
    },
    {
      ukr: "зло",
      eng: "evil",
    },
    {
      ukr: "незваний гість",
      eng: "intruder",
    },
    {
      ukr: "належати",
      eng: "belong",
    },
    {
      ukr: "захищати",
      eng: "protect",
    },
    {
      ukr: "торкатись",
      eng: "touch",
    },
    {
      ukr: "поза, за межами",
      eng: "beyond",
    },
    {
      ukr: "тінь",
      eng: "shadow",
    },
  ];
  const [flip, setFlip] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [newArr, setArr] = useState([
    {
      ukr: "Виберіть",
      eng: "put",
    },
  ]);
  const [clickedMenu, setClickedMenu] = useState(false);

  const openMenu = () => {
    setClickedMenu(!clickedMenu);
  };

  const randomFunc = (number) => {
    shuffle(images);
    setArr(images.slice(0, number));
    setCurrentImageIndex(0);
    setClickedMenu(false);
  };

  const randomFunc10 = () => {
    randomFunc(10);
  };
  const randomFunc15 = () => {
    randomFunc(15);
  };
  const randomFunc5 = () => {
    randomFunc(5);
  };
  const randomFunc20 = () => {
    randomFunc(20);
  };
  const randomFunc25 = () => {
    randomFunc(25);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? newArr.length - 1 : currentImageIndex - 1
    );
    setFlip(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % newArr.length);
    setFlip(false);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <>
      <div className="learn__words--block">
        <div class="dropdown">
          <button onClick={openMenu} class="mainmenubtn">
            Виберіть кількість карток
          </button>
          <div
            class={
              clickedMenu
                ? "dropdown-child dropdown-child_active"
                : "dropdown-child"
            }
          >
            <button onClick={randomFunc5}>5word</button>
            <button onClick={randomFunc10}>10word</button>
            <button onClick={randomFunc15}>15word</button>
            <button onClick={randomFunc20}>20word</button>
            <button onClick={randomFunc25}>25word</button>
          </div>
        </div>
        <div className="slider">
          <div onClick={handlePrevious} class="arrows prev"></div>
          <ReactCardFlip
            className="card__flip"
            isFlipped={flip}
            flipDirection="horisontal"
          >
            <div className="block__eng--slider" onClick={() => setFlip(!flip)}>
              <p>
                {currentImageIndex + 1}/{newArr.length}
              </p>
              {newArr[currentImageIndex].eng}
            </div>
            <div className="block__ukr--slider" onClick={() => setFlip(!flip)}>
              <p>
                {currentImageIndex + 1}/{newArr.length}
              </p>
              {newArr[currentImageIndex].ukr}
            </div>
          </ReactCardFlip>
          <div class="arrows next" onClick={handleNext}></div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
