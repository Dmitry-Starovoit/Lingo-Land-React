const initialState = {
  task9Data: [
    {
      id: 0,
      textBefore: "So, what's first? Give orders for the",
      textAfter: "?",
      value: "",
      answer: "hunt",
    },
    {
      id: 1,
      textBefore: "",
      textAfter: "away evil",
      value: "",
      answer: "chase",
    },
    {
      id: 2,
      textBefore: "",
      textAfter: "? Dad! You're going the wrong way! Dad? I'm not supposed to",
      value: "",
      answer: "intruders",
    },
    {
      id: 3,
      textBefore: "",
      textAfter: "up here. Look, Simba. Everything the light touches is our",
      value: "",
      answer: "go",
    },
    {
      id: 4,
      textBefore: "",
      textAfter: ". You rule all of that? Yes. But a king's",
      value: "",
      answer: "kingdom",
    },
    {
      id: 5,
      textBefore: "",
      textAfter:
        "as ruler rises and falls like the sun. One day, Simba the sun will",
      value: "",
      answer: "time",
    },
    {
      id: 6,
      textBefore: "",
      textAfter:
        "on my time here and will rise with you as the new king. All of this will",
      value: "",
      answer: "set",
    },
    {
      id: 7,
      textBefore: "",
      textAfter: "to me? It belongs to no one, but will be yours to",
      value: "",
      answer: "belong",
    },
    { id: 8, textBefore: "", textAfter: ".", value: "", answer: "protect" },
  ],
  task10Data: [
    {
      id: "id0",
      textAfter: "Все, до чого торкається світло, це наше царство",
      value: "",
      answer: "1",
    },
    {
      id: "id1",
      textAfter: "Все це буде належати мені?",
      value: "",
      answer: "2",
    },
    {
      id: "id2",
      textAfter: "Справжній король шукає те, що він може дати.",
      value: "",
      answer: "3",
    },
    {
      id: "id3",
      textAfter:
        "Коли ми вмираємо, наші тіла стають травою і антилопи, їдять траву...",
      value: "",
      answer: "4",
    },
  ],
};

export function page6Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK9":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK10":
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
}
