import { useState } from "react";

import "./Vocabullary.css";

const Vocabulary = function () {
  const wordsObj = [
    {
      ukrWord: "дерево",
      engWord: "tree",
    },
    {
      ukrWord: "миша",
      engWord: "mouse",
    },
    {
      ukrWord: "яйце",
      engWord: "egg",
    },
    {
      ukrWord: "яблуко",
      engWord: "apple",
    },
    {
      ukrWord: "мудрий",
      engWord: "wise",
    },
    {
      ukrWord: "обгортка",
      engWord: "wrapper",
    },
  ];

  const [valueEng, setValueEng] = useState("");
  const [valueUkr, setValueUkr] = useState("");
  const [updateValue, setUpdateValue] = useState(wordsObj);
  const getValueInputEngWord = (event) => {
    setValueEng(event.target.value);
  };

  const getValueInputUkrWord = (event) => {
    setValueUkr(event.target.value);
  };

  const eventHandler = (event) => {
    event.preventDefault();
    const ukr = valueUkr.toLowerCase();
    const eng = valueEng.toLowerCase();
    if ((ukr === "") & (eng === "")) {
      window.alert("Введіть слова у відповідні поля!");
    } else {
      setUpdateValue((prevState) => [
        ...prevState,
        { ukrWord: ukr, engWord: eng },
      ]);
      setValueEng((event.target.value = ""));
      setValueUkr((event.target.value = ""));
    }
  };

  return (
    <>
      <div className="words">
        <div className="content__header">
          <h1 className="content__title">Vocabulary</h1>
        </div>
        <form action="">
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
            <button onClick={eventHandler}>ADD</button>
          </div>
        </form>
        <div className="wrapper">
          <h4 className="word word__header">ENG</h4>
          <h4 className="trans-word word__header">UKR</h4>
        </div>
        {updateValue.map(function (obj) {
          return (
            <>
              <div className="wrapper">
                <h4 className="word">{obj.engWord}</h4>
                <h4 className="trans-word">{obj.ukrWord}</h4>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Vocabulary;
