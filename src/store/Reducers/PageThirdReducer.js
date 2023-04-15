const initialState = {
  task5Page: [
    {
      id: 0,
      value: "",
      answer: "mud",
      question: "1. Something moist and soft.",
    },
    {
      id: 1,
      value: "",
      answer: "den",
      question: "2. The home of a wild animal.",
    },
    { id: 2, value: "", answer: "evil", question: "3. The opposite of good." },
    {
      id: 3,
      value: "",
      answer: "scraps",
      question: "4. Piece of food left after dinner or breakfast.",
    },
    {
      id: 4,
      value: "",
      answer: "disrespect",
      question: "5. The opposite of respect.",
    },
    {
      id: 5,
      value: "",
      answer: "precious",
      question: "6. This word can be described as something valuable.",
    },
  ],
  task6Page: [
    {
      id: 0,
      textBefore: "1. Walking through the forest, I notice the",
      textAfter: "beauty of nature around me.",
      answer: "incredible",
      value: "",
    },
    {
      id: 1,
      textBefore: "2. All that",
      textAfter: "the light is our kingdom.",
      answer: "touch",
      value: "",
    },
    {
      id: 2,
      textBefore: "3. The candle",
      textAfter: "brightly in the dark room.",
      answer: "burn",
      value: "",
    },
    {
      id: 3,
      textBefore: "4. I felt a soft",
      textAfter: "on my hand.",
      answer: "touch",
      value: "",
    },
    {
      id: 4,
      textBefore: "5. Water started to",
      textAfter: "out of the pipe under the sink.",
      answer: "ooze",
      value: "",
    },
    {
      id: 5,
      textBefore: "6. The view from the mountain top was",
      textAfter: ".",
      answer: "incredible",
      value: "",
    },
  ],
};

export function page3Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK5":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK6":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
