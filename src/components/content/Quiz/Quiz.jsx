import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { cardWord } from "../../../store/actions";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import OpenMenu from "./OpenMenu/OpenMenu";
import QuizHeader from "./QuizHeader/QuizHeader";
import ProgressBar1 from "./ProgressBar/ProgressBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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

  const randomFunc = (number) => {
    shuffle(words);
    dispatch(cardWord(words.slice(0, number)));
    setCurrentImageIndex(0);
    setMinus(0);
    setPlus(0);
    setClickedMenu(false);
    setHidden(true);
    setPercent(0);
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
        <h4>The Lion King</h4>
        <h1>Картки переглянуті!</h1>
        <div>
          <button
            onClick={() => {
              setPercent(0);
              setCurrentImageIndex(0);
              setPlus(0);
              setMinus(0);
              setEndTesting(false);
            }}
            class="mainmenubtn"
          >
            Продовжити
          </button>
        </div>
        <div>
          <Link to="/">
            <button class="mainmenubtn">На головне меню</button>
          </Link>
        </div>
        <div className="result__block">
          <h4>Результати:</h4>
          <div className="result__block--flex">
            <div className="result__block--item">
              <h4>{`Я знаю     ${plus}`}</h4>
            </div>
            <div className="result__block--item">
              <h4>{`Я вивчаю   ${minus}`}</h4>
            </div>
          </div>
        </div>
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
        <div className={hidden === true ? "progress" : "progress  hidden"}>
          <ProgressBar1 bgcolor="#ffe16b" completed={percent} />
        </div>
        <div className={hidden === true ? "slider" : "slider  hidden"}>
          <ReactCardFlip
            className="card__flip"
            isFlipped={flip}
            flipDirection="horisontal"
          >
            <div className="block__slider" onClick={() => setFlip(!flip)}>
              <div className="block__slider--text">English</div>
              <div className="block__child">
                {cardWords[currentImageIndex].engWord}
              </div>
            </div>
            <div className="block__slider" onClick={() => setFlip(!flip)}>
              <div className="block__slider--text">Українська</div>
              <div className="block__child">
                {cardWords[currentImageIndex].ukrWord}
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div
          className={
            hidden === true ? "score__numbers" : "score__numbers  hidden"
          }
        >
          <button
            onMouseOver={() => {
              setFlip(false);
            }}
            onClick={handleNext}
            class="mainmenubtn"
          >
            Продовжити
          </button>
          <button
            onMouseOver={() => {
              setFlip(false);
            }}
            onClick={handlePrew}
            class="mainmenubtn"
          >
            Я це знаю!
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
