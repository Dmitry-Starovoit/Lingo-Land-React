const initialState = {
  task1Page: [
    {
      textBefore: "I always show",
      textAfter: "to my elders. She made a ",
      value: "",
      answer: "respect",
    },
    {
      textBefore: "",
      textAfter: "to meet me at the park. The ",
      value: "",
      answer: "promise",
    },
    {
      textBefore: "",
      textAfter: "car drove by our house every hour . He is a ",
      value: "",
      answer: "patrol",
    },
    {
      textBefore: "",
      textAfter: "man who always offers good advice . ",
      value: "",
      answer: "slamming",
    },
    {
      textBefore: "",
      textAfter: "the door won`t solve the problem. It`s important to avoid ",
      value: "",
      answer: "wise",
    },
    {
      textBefore: "",
      textAfter: "thoughts and actions.",
      value: "",
      answer: "evil",
    },
  ],
  task2DataColumnFirst: [
    { que: "Genuflect ", answer: "ставати на коліна", value: "", id: 0 },
    { que: "Scar      ", answer: "шрам", value: "", id: 1 },
    { que: "Perhaps   ", answer: "можливо" || "мабуть", value: "", id: 2 },
    { que: "Expel     ", answer: "вигнати" || "виключити", value: "", id: 3 },
    { que: "Intruder  ", answer: "незваний гість", value: "", id: 4 },
    { que: "Belong    ", answer: "належати", value: "", id: 5 },
    { que: "Beyond    ", answer: "за межами" || "поза", value: "", id: 6 },
    { que: "Report    ", answer: "доповідь", value: "", id: 7 },
  ],
  task2DataColumnSecond: [
    { que: "Lead      ", answer: "вести" || "очолювати", value: "", id: 8 },
    { que: "Away      ", answer: "далеко", value: "", id: 9 },
    {
      que: "Towards   ",
      answer: "в напрямку" || "до" || "на зустріч",
      value: "",
      id: 10,
    },
    { que: "Majesty   ", answer: "величність", value: "", id: 11 },
    { que: "Buzz      ", answer: "жужати", value: "", id: 12 },
    { que: "Reqest    ", answer: "запит" || "прохання", value: "", id: 13 },
    { que: "Hungry    ", answer: "голодний", value: "", id: 14 },
    { que: "Tremendous", answer: "величезний", value: "", id: 15 },
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

export function page1Task1Reducer(state = initialState, action) {
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
