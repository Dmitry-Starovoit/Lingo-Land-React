const initialState = {
  page12Data: [
    {
      text: "Rewrite the following sentence in the present perfect tense: 'Mufasa taught Simba about the Circle of Life.'",
      value: "",
      answer: "Mufasa has taught Simba about the Circle of Life.",
    },
    {
      text: "Rewrite the following sentence in the future tense: 'Simba and Nala play together.'",
      value: "",
      answer: "Simba and Nala will play together.",
    },
    {
      text: "Rewrite the following sentence in the past continuous tense: 'Nala is hunting for food.'",
      value: "",
      answer: "Nala was hunting for food.",
    },
    {
      text: "Rewrite the following sentence in the negative form: 'Simba and Nala played together.'",
      value: "",
      answer: "Simba and Nala did not play together.",
    },
    {
      text: "Rewrite the following sentence in the present perfect tense: 'Mufasa ruled the Pride Lands for many years.'",
      value: "",
      answer: "Mufasa has ruled the Pride Lands for many years.",
    },
  ],
};

export function page12Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_PAGE12":
      return {
        ...state,
        value: action.payload,
      };

    default:
      return state;
  }
}
