import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Parent from "./Components/parentComponent";
import store from "./Modules/Redux/store.ts";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Parent />
    </Provider>
  </React.StrictMode>
);
