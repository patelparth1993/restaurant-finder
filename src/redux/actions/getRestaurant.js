import axios from "axios";
import actionType from "./actionType";

export const getRestaurants = (city) => {
  return (dispatch) => {
    axios
      .get(`https://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then((response) => {
        dispatch({
          type: actionType.GET_RESTAURANT,
          payload: response.data.restaurants,
        });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({
          type: actionType.ERROR,
          payload: err.message,
        });
      });
  };
};
