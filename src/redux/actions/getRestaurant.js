import axios from "axios";
import actionType from "./actionType";
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();

const getRestFunction = async (city) => {
  const result = await axios.get(
    `https://opentable.herokuapp.com/api/restaurants?city=${city}`
  );
  if (result.status === 200) {
    return result.data.restaurants;
  } else {
    return new Error("Server Error");
  }
};

export const getRestaurants = (city, getRestFn = getRestFunction) => async (
  dispatch
) => {
  try {
    const restList = await getRestFn(city);
    dispatch({ type: actionType.GET_RESTAURANT, payload: restList });
  } catch (err) {
    dispatch({ type: actionType.ERROR, payload: err.message });
  }
};
