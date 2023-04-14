const initialState = {
  wordsObj: [
    {
      ukrWord: "бенкет, святкування",
      engWord: "feast",
    },
    {
      ukrWord: "шматок, недоїдки",
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
      ukrWord: "в напрямку, назустріч",
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
      ukrWord: "дитина (тварини)",
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
      ukrWord: "людина з народу",
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
  ],
  cardsObj: [
    {
      ukr: "Виберіть",
      eng: "put",
    },
  ],
};

export function VocabullaryReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return {
        ...state,
        wordsObj: [action.payload, ...state.wordsObj],
      };
    default:
      return state;
  }
}

export function CardReducer(state = initialState, action) {
  switch (action.type) {
    case "CARD_WORDS":
      return {
        ...state,
        cardsObj: [...action.payload],
      };
    default:
      return state;
  }
}
