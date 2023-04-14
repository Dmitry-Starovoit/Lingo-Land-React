import React, { useState } from "react";
import { cardWord } from "../../store/actions";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import OpenMenu from "./OpenMenu/OpenMenu";
import QuizHeader from "./QuizHeader/QuizHeader";
import ProgressBar1 from "./ProgressBar/ProgressBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResultBlock from "./ResultBlock/ResultBlock";
import CardFlip from "./CardFlip/CardFlip";
import NavButton from "./NavButton/NavButton";

const Quiz = () => {
  const words = useSelector((state) => state.VocabullaryReducer.wordsObj);
  const cardWords = useSelector((state) => state.CardReducer.cardsObj);
  const dispatch = useDispatch();

  const [clickedMenu, setClickedMenu] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [endTesting, setEndTesting] = useState(false);
  const [flip, setFlip] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [minus, setMinus] = useState(0);
  const [plus, setPlus] = useState(0);

  const nullishFunc = () => {
    setPercent(0);
    setCurrentImageIndex(0);
    setPlus(0);
    setMinus(0);
    setEndTesting(false);
  };

  const randomFunc = (number) => {
    shuffle(words);
    dispatch(cardWord(words.slice(0, number)));
    setClickedMenu(false);
    setHidden(true);
    nullishFunc();
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % cardWords.length);
    setPercent(((currentImageIndex + 1) / cardWords.length) * 100);
    setFlip(false);
    setPlus(plus + 1);
    if (currentImageIndex + 1 == cardWords.length) {
      setEndTesting(true);
    }
  };

  const handlePrew = () => {
    setCurrentImageIndex((currentImageIndex + 1) % cardWords.length);
    setPercent(((currentImageIndex + 1) / cardWords.length) * 100);
    setFlip(false);
    setMinus(minus + 1);
    if (currentImageIndex + 1 == cardWords.length) {
      setEndTesting(true);
    }
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
      <QuizHeader />
      <div
        className={
          endTesting === false
            ? "hidden learn__words--block"
            : "result__words--block"
        }
      >
        <ResultBlock
          nullishFunc={nullishFunc}
          minus={minus}
          plus={plus}
          endTesting={endTesting}
        />
      </div>
      <div
        className={
          endTesting === true
            ? "hidden learn__words--block"
            : "learn__words--block"
        }
      >
        <OpenMenu
          randomFunc={randomFunc}
          clickedMenu={clickedMenu}
          setClickedMenu={setClickedMenu}
        />

        <ProgressBar1 hidden={hidden} bgcolor="#ffe16b" completed={percent} />

        <CardFlip
          hidden={hidden}
          flip={flip}
          setFlip={setFlip}
          cardWords={cardWords}
          currentImageIndex={currentImageIndex}
        />

        <NavButton
          hidden={hidden}
          setFlip={setFlip}
          handleNext={handleNext}
          handlePrew={handlePrew}
        />
      </div>
    </>
  );
};

export default Quiz;
