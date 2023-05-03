import { useState } from "react";
import "./ItemBlock.css";
const ItemBlock = (props) => {
  return (
    <div className="item__block--wrapper">
      <div className="item__block--test">
        {props.showScore ? (
          <>
            <div className="result__block--test">
              <h4>Результати:</h4>
              <div className="result__block--flex">
                <div className="result__block--item">
                  <h4>{`Вірно     ${props.score}`}</h4>
                </div>
                <div className="result__block--item">
                  <h4>{`Не вірно   ${
                    props.questions.length - props.score
                  }`}</h4>
                </div>
              </div>
            </div>
            <button onClick={() => props.nullishFunc()}>Пройти ще раз</button>
          </>
        ) : (
          <div className="item__block--flex">
            <div className="question-section">
              <div className="question-count">
                <span>Question {props.currentQuestion + 1}</span>/
                {props.questions.length}
              </div>
              <div className="question-text">
                {props.questions[props.currentQuestion].questionText}
              </div>
              <div className="question-label">Виберіть правильну відповідь</div>
            </div>
            <div className="answer__section--test">
              {props.questions[props.currentQuestion].answerOptions.map(
                (answerOption) => (
                  <button
                    onClick={() =>
                      props.handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemBlock;
