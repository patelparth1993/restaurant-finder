import { combineReducers } from "redux";
import resReducer from "./restaurantReducer";
const combinedReducers = combineReducers({
  restaurants: resReducer,
});

export default combinedReducers;
