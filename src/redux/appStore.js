import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import indexReducer from "./reducers/indexReducer";

export const appStore = applyMiddleware(thunk)(createStore)(
  indexReducer,
  window.devToolsExtension && window.devToolsExtension()
);
