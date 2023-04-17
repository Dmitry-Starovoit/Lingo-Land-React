import firstImg from "../../assets/task11/first-img.jpg";
import twoImg from "../../assets/task11/second-img.jpg";
import threeImg from "../../assets/task11/three-img.jpg";
import fourImg from "../../assets/task11/four-img.jpg";

const initialState = {
  task11ColumnFirst: [
    {
      questionText: "Did Zazu have a morning report?",
      image: firstImg,
      answerOptions: [
        {
          id: "choose1",
          answerText: "He didn't see anyone, he didn't have to tell.",
          isCorrect: false,
        },
        {
          id: "choose1",
          answerText: "He had a morning report.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Who owns these words 'it`s the news'?",
      image: twoImg,
      answerOptions: [
        {
          id: "choose2",
          answerText: "Zazu",
          isCorrect: true,
        },
        {
          id: "choose2",
          answerText: "Simba",
          isCorrect: false,
        },
        {
          id: "choose2",
          answerText: "Mufasu",
          isCorrect: false,
        },
      ],
    },
  ],
  task11ColumnSecond: [
    {
      questionText:
        "For whom Mufasa said these words 'Wait for the perfect moment to pounce'?",
      image: threeImg,
      answerOptions: [
        {
          id: "choose3",
          answerText: "Zazy",
          isCorrect: false,
        },
        {
          id: "choose3",
          answerText: "Simba",
          isCorrect: true,
        },
      ],
    },
    {
      questionText: "Why did Mufasa not take Simba with him?",
      image: fourImg,
      answerOptions: [
        {
          id: "choose4",
          answerText: "Simba had a headache and he couldn't.",
          isCorrect: false,
        },
        {
          id: "choose4",
          answerText: "Because Simba is still a child.",
          isCorrect: true,
        },
        {
          id: "choose4",
          answerText: "Because Simba broke his leg.",
          isCorrect: false,
        },
      ],
    },
  ],
  task11ResultFirst: new Set(),
  task11ResultSecond: new Set(),
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
