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
