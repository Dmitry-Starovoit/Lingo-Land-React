import React, { useState } from "react";
import { cardWord } from "../../store/actions";
import "./Test.css";
import { useDispatch, useSelector } from "react-redux";
import OpenMenu from "./OpenMenu/OpenMenu";
import QuizHeader from "./QuizHeader/QuizHeader";
import ProgressBar1 from "./ProgressBar/ProgressBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ResultBlock from "./ResultBlock/ResultBlock";
import NavButton from "./NavButton/NavButton";
import ItemBlock from "./ItemBlock/ItemBlock";

const Test = () => {
  const questions = [
    {
      questionText: "Feast",
      answerOptions: [
        { answerText: "Вхід, вступ", isCorrect: false },
        { answerText: "Охороняти", isCorrect: false },
        { answerText: "Бенкет, святкування", isCorrect: true },
        { answerText: "Належати", isCorrect: false },
      ],
    },
    {
      questionText: "Шрам",
      answerOptions: [
        { answerText: "Perhaps", isCorrect: false },
        { answerText: "Scar", isCorrect: true },
        { answerText: "Slam", isCorrect: false },
        { answerText: "Evil", isCorrect: false },
      ],
    },
    {
      questionText: "Intruder",
      answerOptions: [
        { answerText: "Незваний гість", isCorrect: true },
        { answerText: "Нападати", isCorrect: false },
        { answerText: "Змішуватися", isCorrect: false },
        { answerText: "Неймовірний", isCorrect: false },
      ],
    },
    {
      questionText: "Палити, горіти",
      answerOptions: [
        { answerText: "Pounce", isCorrect: false },
        { answerText: "Approach", isCorrect: false },
        { answerText: "Graveyard", isCorrect: false },
        { answerText: "Burn", isCorrect: true },
      ],
    },
    {
      questionText: "Exactly",
      answerOptions: [
        { answerText: "Людина з народу", isCorrect: false },
        { answerText: "Точно", isCorrect: true },
        { answerText: "Сила", isCorrect: false },
        { answerText: "Тінь", isCorrect: false },
      ],
    },
    {
      questionText: "Полювання",
      answerOptions: [
        { answerText: "Towards", isCorrect: false },
        { answerText: "Slam", isCorrect: false },
        { answerText: "Hunt", isCorrect: true },
        { answerText: "Ooze", isCorrect: false },
      ],
    },
    {
      questionText: "Touch",
      answerOptions: [
        { answerText: "Торкатись", isCorrect: true },
        { answerText: "Величезний", isCorrect: false },
        { answerText: "Величність", isCorrect: false },
        { answerText: "Доповідь", isCorrect: false },
      ],
    },
    {
      questionText: "Шматок, недоїдки",
      answerOptions: [
        { answerText: "Wise", isCorrect: false },
        { answerText: "Towards", isCorrect: false },
        { answerText: "Reqest", isCorrect: false },
        { answerText: "Scrap", isCorrect: true },
      ],
    },
    {
      questionText: "Wise",
      answerOptions: [
        { answerText: "Захищати", isCorrect: false },
        { answerText: "Мудрий", isCorrect: true },
        { answerText: "Виключити, вигнати", isCorrect: false },
        { answerText: "Неповага", isCorrect: false },
      ],
    },
    {
      questionText: "Просочуватись",
      answerOptions: [
        { answerText: "Exactly", isCorrect: false },
        { answerText: "Hyena", isCorrect: false },
        { answerText: "Leap", isCorrect: false },
        { answerText: "Оoze", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const [hidden, setHidden] = useState(false);
  const [endTesting, setEndTesting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [minus, setMinus] = useState(0);
  const [plus, setPlus] = useState(0);

  const nullishFunc = () => {
    setCurrentQuestion(0);
    setShowScore(0);
    setScore(0);
  };

  // const randomFunc = (number) => {
  //   shuffle(words);
  //   dispatch(cardWord(words.slice(0, number)));
  //   setClickedMenu(false);
  //   setHidden(true);
  //   nullishFunc();
  // };

  // const shuffle = (array) => {
  //   let currentIndex = array.length,
  //     randomIndex;
  //   while (currentIndex != 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // };

  return (
    <div className="test__wrapper">
      <QuizHeader />
      <div
        className={
          endTesting === false
            ? "hidden test__words--block"
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
            ? "hidden test__words--block"
            : "test__words--block"
        }
      >
        <ItemBlock
          nullishFunc={nullishFunc}
          className="item__block"
          setShowScore={setShowScore}
          showScore={showScore}
          score={score}
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerOptionClick={handleAnswerOptionClick}
          hidden={hidden}
          currentImageIndex={currentImageIndex}
        />
      </div>
    </div>
  );
};

export default Test;
