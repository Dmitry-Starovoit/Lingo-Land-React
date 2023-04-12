import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { cardWord } from "../../../store/actions";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import OpenMenu from "./OpenMenu/OpenMenu";

const Quiz = () => {
  const words = useSelector((state) => state.VocabullaryReducer.wordsObj);
  const cardWords = useSelector((state) => state.CardReducer.cardsObj);
  const dispatch = useDispatch();

  const [clickedMenu, setClickedMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [flip, setFlip] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const randomFunc = (number) => {
    shuffle(words);
    dispatch(cardWord(words.slice(0, number)));
    setCurrentImageIndex(0);
    setClickedMenu(false);
    setHidden(true);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? cardWords.length - 1 : currentImageIndex - 1
    );
    setFlip(false);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % cardWords.length);
    setFlip(false);
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  return (
    <>
      <div className="learn__words--block ">
        <h1>Quiz</h1>
        <OpenMenu
          randomFunc={randomFunc}
          clickedMenu={clickedMenu}
          setClickedMenu={setClickedMenu}
        />
        <div className={hidden === true ? "slider" : "slider  hidden"}>
          <div
            onClick={handlePrevious}
            onMouseOver={() => {
              setFlip(false);
            }}
            class="arrows prev"
          ></div>
          <ReactCardFlip
            className="card__flip"
            isFlipped={flip}
            flipDirection="horisontal"
          >
            <div className="block__slider" onClick={() => setFlip(!flip)}>
              <div className="block__child">
                {cardWords[currentImageIndex].engWord}
              </div>
            </div>
            <div className="block__slider" onClick={() => setFlip(!flip)}>
              <div className="block__child">
                {cardWords[currentImageIndex].ukrWord}
              </div>
            </div>
          </ReactCardFlip>
          <div
            class="arrows next"
            onMouseOver={() => {
              setFlip(false);
            }}
            onClick={handleNext}
          ></div>
        </div>
        <div className="score__numbers">
          <p>
            {currentImageIndex + 1}/{cardWords.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default Quiz;
