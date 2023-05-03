import { getDataTask1 } from "../actions";

export const task1FetchCustomer = () => {
  return function (dispatch) {
    fetch("https://644795d450c253374428bdfb.mockapi.io/api/v1/Task13Data")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(getDataTask1(json));
      });
  };
};
