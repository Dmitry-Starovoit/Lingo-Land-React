export const ADD_WORD = "ADD_WORD";

// Action Creator
export const addWord = (word) => {
  return {
    type: ADD_WORD,

    payload: word,
  };
};

export const CARD_WORDS = "CARD_WORDS";

// Action Creator
export const cardWord = (word) => {
  return {
    type: CARD_WORDS,

    payload: word,
  };
};

export const setCoordinate = (coordinate) => ({
  type: "SET_COORDINATE",
  payload: coordinate,
});

export const getDataTask1 = (value) => ({
  type: "GET_DATA_TASK1",
  payload: value,
});

export const getValueTask1 = (value) => ({
  type: "GET_VALUE_TASK1",
  payload: value,
});

export const getValueTask2 = (value) => ({
  type: "GET_VALUE_TASK2",
  payload: value,
});

export const getValueTask3 = (value) => ({
  type: "GET_VALUE_TASK3",
  payload: value,
});

export const getValueTask5 = (value) => ({
  type: "GET_VALUE_TASK5",
  payload: value,
});
export const getValueTask6 = (value) => ({
  type: "GET_VALUE_TASK6",
  payload: value,
});

export const getValueTask8 = (value) => ({
  type: "GET_VALUE_TASK8",
  payload: value,
});

export const getValueTask9 = (value) => ({
  type: "GET_VALUE_TASK9",
  payload: value,
});

export const getValueTask10 = (value) => ({
  type: "GET_VALUE_TASK10",
  payload: value,
});

export const getValueTask11First = (value) => ({
  type: "GET_VALUE_TASK11_FIRST",
  payload: value,
});

export const getValueTask11Second = (value) => ({
  type: "GET_VALUE_TASK11_SECOND",
  payload: value,
});

export const getValuePage10 = (value) => ({
  type: "GET_VALUE_PAGE10",
  payload: value,
});

export const addResultTask10 = (value) => ({
  type: "ADD_RESULT_PAGE10",
  payload: value,
});

export const getValuePage11 = (value) => ({
  type: "GET_VALUE_PAGE11",
  payload: value,
});
export const getValuePage12 = (value) => ({
  type: "GET_VALUE_PAGE12",
  payload: value,
});

export const getValuePage15 = (value) => ({
  type: "GET_VALUE_TASK1_PAGE15",
  payload: value,
});
export const getValue2Page15 = (value) => ({
  type: "GET_VALUE_TASK2_PAGE15",
  payload: value,
});
