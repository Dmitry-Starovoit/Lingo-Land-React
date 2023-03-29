import { useState } from "react";

import "./Vocabullary.css";

const Vocabulary = function () {
  const wordsObj = [
    {
      ukrWord: "бенкет, святкування",
      engWord: "feast",
    },
    {
      ukrWord: "шматок, частина, недоїдки",
      engWord: "scrap",
    },
    {
      ukrWord: "величність",
      engWord: "majesty",
    },
    {
      ukrWord: "запит, прохання",
      engWord: "reqest",
    },
    {
      ukrWord: "вхід, вступ",
      engWord: "entrance",
    },
    {
      ukrWord: "ставати на коліна",
      engWord: "genuflect",
    },
    {
      ukrWord: "шрам",
      engWord: "scar",
    },
    {
      ukrWord: "мабуть, можливо",
      engWord: "perhaps",
    },
    {
      ukrWord: "неповага",
      engWord: "disrespect",
    },
    {
      ukrWord: "повага",
      engWord: "respect",
    },
    {
      ukrWord: "в напрямку, до, назустріч",
      engWord: "towards",
    },
    {
      ukrWord: "величезний",
      engWord: "tremendous",
    },
    {
      ukrWord: "дорогоцінний",
      engWord: "precious",
    },
    {
      ukrWord: "мудрий",
      engWord: "wise",
    },
    {
      ukrWord: "ударити",
      engWord: "slam",
    },
    {
      ukrWord: "дзьоб",
      engWord: "beak",
    },
    {
      ukrWord: "охороняти",
      engWord: "patrol",
    },
    {
      ukrWord: "обіцяти",
      engWord: "promise",
    },
    {
      ukrWord: "виключити, вигнати",
      engWord: "expel",
    },
    {
      ukrWord: "полювання",
      engWord: "hunt",
    },
    {
      ukrWord: "зло",
      engWord: "evil",
    },
    {
      ukrWord: "незваний гість",
      engWord: "intruder",
    },
    {
      ukrWord: "належати",
      engWord: "belong",
    },
    {
      ukrWord: "захищати",
      engWord: "protect",
    },
    {
      ukrWord: "торкатись",
      engWord: "touch",
    },
    {
      ukrWord: "поза, за межами",
      engWord: "beyond",
    },
    {
      ukrWord: "тінь",
      engWord: "shadow",
    },
    {
      ukrWord: "повзати",
      engWord: "crawl",
    },
    {
      ukrWord: "просочуватись",
      engWord: "ooze",
    },
    {
      ukrWord: "мул, багно",
      engWord: "mud",
    },
    {
      ukrWord: "мураха",
      engWord: "ant",
    },
    {
      ukrWord: "стрибати",
      engWord: "leap",
    },
    {
      ukrWord: "доповідь",
      engWord: "report",
    },
    {
      ukrWord: "жужати",
      engWord: "buzz",
    },
    {
      ukrWord: "бджола",
      engWord: "bee",
    },
    {
      ukrWord: "дитина (про тварин)",
      engWord: "cub",
    },
    {
      ukrWord: "гієна",
      engWord: "hyena",
    },
    {
      ukrWord: "вести, очолювати",
      engWord: "lead",
    },
    {
      ukrWord: "нападати",
      engWord: "pounce",
    },
    {
      ukrWord: "далеко",
      engWord: "away",
    },
    {
      ukrWord: "справедливо",
      engWord: "fair",
    },
    {
      ukrWord: "точно",
      engWord: "exactly",
    },
    {
      ukrWord: "наближатися",
      engWord: "approach",
    },
    {
      ukrWord: "погоня, гнатися",
      engWord: "chase",
    },
    {
      ukrWord: "благати, просити",
      engWord: "beg",
    },
    {
      ukrWord: "на, після",
      engWord: "upon",
    },
    {
      ukrWord: "людина з народу (просто людина)",
      engWord: "commoner",
    },
    {
      ukrWord: "змішуватися",
      engWord: "mingle",
    },
    {
      ukrWord: "спуститися, знизитись",
      engWord: "come down",
    },
    {
      ukrWord: "вилетіло з голови",
      engWord: "slipped my mind",
    },
    {
      ukrWord: "сила",
      engWord: "strength",
    },
    {
      ukrWord: "тварина, жорсткий",
      engWord: "brute",
    },
    {
      ukrWord: "існувати",
      engWord: "exist",
    },
    {
      ukrWord: "барлога",
      engWord: "den",
    },
    {
      ukrWord: "кладовище",
      engWord: "graveyard",
    },
    {
      ukrWord: "гнити, псуватись",
      engWord: "rot",
    },
    {
      ukrWord: "палити, горіти",
      engWord: "burn",
    },
    {
      ukrWord: "неймовірний",
      engWord: "incredible",
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
