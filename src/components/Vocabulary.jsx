import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWord } from "../store/actions";
import "./Vocabullary.css";

const Vocabulary = function () {
  const words = useSelector((state) => state.VocabullaryReducer.wordsObj);
  const dispatch = useDispatch();
  console.log(words);

  const [valueEng, setValueEng] = useState("");
  const [valueUkr, setValueUkr] = useState("");

  const getValueInputEngWord = (event) => {
    setValueEng(event.target.value);
  };

  const getValueInputUkrWord = (event) => {
    setValueUkr(event.target.value);
  };

  const handleAddWord = (event) => {
    event.preventDefault();
    const ukr = valueUkr.toLowerCase();
    const eng = valueEng.toLowerCase();
    if (ukr === "" || eng === "") {
      window.alert("Please enter both English and Ukrainian words!");
    } else {
      dispatch(addWord({ ukrWord: ukr, engWord: eng }));
      setValueEng("");
      setValueUkr("");
    }
  };

  return (
    <div className="words">
      <div className="content__header">
        <h1 className="content__title">Vocabulary</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Українська"
          onChange={getValueInputUkrWord}
          value={valueUkr}
        />
        <input
          type="text"
          placeholder="English"
          onChange={getValueInputEngWord}
          value={valueEng}
        />
        <div>
          <button onClick={handleAddWord}>ADD</button>
        </div>
      </form>
      <div className="wrapper">
        <h4 className="word word__header">ENG</h4>
        <h4 className="trans-word word__header">UKR</h4>
      </div>
      {words.map(function (word) {
        return (
          <div className="wrapper" key={word.id}>
            <h4 className="word">{word.engWord}</h4>
            <h4 className="trans-word">{word.ukrWord}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Vocabulary;
