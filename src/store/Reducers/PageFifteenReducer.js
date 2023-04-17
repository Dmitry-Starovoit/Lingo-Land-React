import img1 from "../../assets/after_watching/img-2-1.jpg";
import img2 from "../../assets/after_watching/img-2-2.jpg";
import img3 from "../../assets/after_watching/img-2-3.jpg";
import img4 from "../../assets/after_watching/img-2-4.jpg";
import img5 from "../../assets/after_watching/img-2-5.jpg";

const initialState = {
  task1Page15: [
    {
      id: 0,
      textBefore: "1. What",
      textAfter: "Simba and Nala do every dat? (do / does )",
      value: "",
      answer: "do",
    },
    {
      id: 1,
      textBefore: "2. Zazy",
      textAfter: "he king`s advisor. (is/ are)",
      value: "",
      answer: "is",
    },
    {
      id: 2,
      textBefore: "3. Scar",
      textAfter: "to be the next king of Pride Land. (want/ wants)",
      value: "",
      answer: "wants",
    },
    {
      id: 3,
      textBefore: "4. Mufasa",
      textAfter: "Simba how to be a good king. (teach/ teaches)",
      value: "",
      answer: "teaches",
    },
    {
      id: 4,
      textBefore: "5. The sun",
      textAfter: "in the sky every day. (rise/ rises)",
      value: "",
      answer: "rises",
    },
    {
      id: 5,
      textBefore: "6. Simba and Nala",
      textAfter: "to explore the elephant graveyard. (want / wants)",
      value: "",
      answer: "want",
    },
  ],
  task2Page15ColumnFirst: [
    {
      img: img1,
      value: "",
      answer: "Zazy and Scar",
    },
    {
      img: img2,
      value: "",
      answer: "Nala and Simba",
    },
  ],
  task2Page15ColumnSecond: [
    {
      img: img3,
      value: "",
      answer: "Simba",
    },
    {
      img: img4,
      value: "",
      answer: "Sarabi",
    },
    {
      img: img5,
      value: "",
      answer: "Mufasa",
    },
  ],
};

export function page15Reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_VALUE_TASK1_PAGE15":
      return {
        ...state,
        value: action.payload,
      };
    case "GET_VALUE_TASK2_PAGE15":
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
}
