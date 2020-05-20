import React from "react";
import { Provider } from "react-redux";

import Restaurant from "./components/Restaurant";
import { appStore } from "./redux/appStore";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <h2>Restaurant Finder</h2>
      <Provider store={appStore}>
        <Restaurant />
      </Provider>
    </div>
  );
}

export default App;
