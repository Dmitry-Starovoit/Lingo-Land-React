import firstImg from "../../assets/task11/first-img.jpg";
import twoImg from "../../assets/task11/second-img.jpg";
import threeImg from "../../assets/task11/three-img.jpg";
import fourImg from "../../assets/task11/four-img.jpg";

const initialState = {
  task11ColumnFirst: [
    {
      id: 1,
      question: "Did Zazu have a morning report?",
      img: firstImg,
      value: "",

      answers: [
        {
          answer: "He didn't see anyone, he didn't have to tell.",
          value: false,
          name: "one",
          id: 0,
        },
        {
          answer: "He had a morning report.",
          name: "one",
          value: true,
          id: 1,
        },
      ],
    },
    {
      id: 2,
      question: "Who owns these words 'it`s the news'?",
      img: twoImg,
      value: "",

      answers: [
        {
          answer: "Zazu",
          value: true,
          name: "two",
          id: 2,
        },
        { answer: "Simba", value: false, name: "two", id: 3 },
      ],
    },
  ],
  task11ColumnSecond: [
    {
      id: 3,
      question:
        "For whom Mufasa said these words 'Wait for the perfect moment to pounce'?",
      img: threeImg,
      value: "",

      answers: [
        {
          answer: "Zazy",
          value: false,
          name: "three",
          id: 5,
        },
        { answer: "Simba", value: true, name: "three", id: 6 },
      ],
    },
    {
      id: 4,
      question: "Why did Mufasa not take Simba with him?",
      img: fourImg,
      value: "",

      answers: [
        {
          answer: "Simba had a headache and he couldn't.",
          value: false,
          name: "four",
          id: 7,
        },
        {
          answer: "Because Simba is still a child.",
          value: true,
          name: "four",
          id: 8,
        },
      ],
    },
  ],
};

export function page7Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK11_FIRST":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK11_SECOND":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
