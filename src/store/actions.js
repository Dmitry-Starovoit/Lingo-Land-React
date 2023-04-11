export const ADD_WORD = "ADD_WORD";

// Action Creator
export const addWord = (word) => {
  return {
    type: ADD_WORD,

    payload: word,
  };
};
