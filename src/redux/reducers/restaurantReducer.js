import actionType from "../actions/actionType";

const initRestaurants = [];

export default function resReducer(state = initRestaurants, { type, payload }) {
  switch (type) {
    case actionType.GET_RESTAURANT:
      return [...payload];
    default:
      return state;
  }
}
