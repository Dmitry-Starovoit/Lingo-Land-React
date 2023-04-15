const initialState = {
  task8Data: [
    {
      textData: "Sarabi and I didn't see you at the presentation of Simba.",
      value: "",
      answer: "2",
    },
    {
      textData:
        "Of course I meant no disrespect towards His Majesty or Sarabi.",
      value: "",
      answer: "5",
    },
    {
      textData: "Well, look who's come down to mingle with the commoners.",
      value: "",
      answer: "1",
    },
    {
      textData: "Must've slipped my mind.",
      value: "",
      answer: "4",
    },
    {
      textData: "As the king's brother you should've been first in line.",
      value: "",
      answer: "7",
    },
    {
      textData: "Was that today?",
      value: "",
      answer: "3",
    },
    {
      textData: "I was first in line Or don't you remember?",
      value: "",
      answer: "8",
    },
    {
      textData: "As you know, I have tremendous respect for the queen.",
      value: "",
      answer: "6",
    },
  ],
};

export function page5Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK8":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
