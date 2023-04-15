const initialState = {
  task1Page: [
    {
      id: 0,
      textBefore: "I always show",
      textAfter: "to my elders. She made a ",
      value: "",
      answer: "respect",
    },
    {
      id: 1,
      textBefore: "",
      textAfter: "to meet me at the park. The ",
      value: "",
      answer: "promise",
    },
    {
      id: 2,
      textBefore: "",
      textAfter: "car drove by our house every hour . He is a ",
      value: "",
      answer: "patrol",
    },
    {
      id: 3,
      textBefore: "",
      textAfter: "man who always offers good advice . ",
      value: "",
      answer: "slamming",
    },
    {
      id: 4,
      textBefore: "",
      textAfter: "the door won`t solve the problem. It`s important to avoid ",
      value: "",
      answer: "wise",
    },
    {
      id: 5,
      textBefore: "",
      textAfter: "thoughts and actions.",
      value: "",
      answer: "evil",
    },
  ],
  task2DataColumnFirst: [
    { id: 0, que: "Genuflect ", answer: "ставати на коліна", value: "", id: 0 },
    { id: 1, que: "Scar      ", answer: "шрам", value: "", id: 1 },
    {
      id: 2,
      que: "Perhaps   ",
      answer: "можливо" || "мабуть",
      value: "",
      id: 2,
    },
    {
      id: 3,
      que: "Expel     ",
      answer: "вигнати" || "виключити",
      value: "",
      id: 3,
    },
    { id: 4, que: "Intruder  ", answer: "незваний гість", value: "", id: 4 },
    { id: 5, que: "Belong    ", answer: "належати", value: "", id: 5 },
    {
      id: 6,
      que: "Beyond    ",
      answer: "за межами" || "поза",
      value: "",
      id: 6,
    },
    { id: 7, que: "Report    ", answer: "доповідь", value: "", id: 7 },
  ],
  task2DataColumnSecond: [
    {
      id: 0,
      que: "Lead      ",
      answer: "вести" || "очолювати",
      value: "",
      id: 8,
    },
    { id: 1, que: "Away      ", answer: "далеко", value: "", id: 9 },
    {
      id: 2,
      que: "Towards   ",
      answer: "в напрямку" || "до" || "на зустріч",
      value: "",
      id: 10,
    },
    { id: 3, que: "Majesty   ", answer: "величність", value: "", id: 11 },
    { id: 4, que: "Buzz      ", answer: "жужати", value: "", id: 12 },
    {
      id: 5,
      que: "Reqest    ",
      answer: "запит" || "прохання",
      value: "",
      id: 13,
    },
    { id: 6, que: "Hungry    ", answer: "голодний", value: "", id: 14 },
    { id: 7, que: "Tremendous", answer: "величезний", value: "", id: 15 },
  ],
  task3Data: [
    { que: "Багно", hint: "d m u", answer: "mud", id: 0, value: "" },
    {
      que: "Кладовище",
      hint: "a r g v e r y a d",
      answer: "graveyard",
      id: 1,
      value: "",
    },
    { que: "Існувати", hint: "i s x t e", answer: "exist", id: 2, value: "" },
    { que: "Благати", hint: "e g b", answer: "beg", id: 3, value: "" },
  ],
};

export function page1Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK1":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK2":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK3":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
