import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
// import "react-phone-input-2/lib/style.css";

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
