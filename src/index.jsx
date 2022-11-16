import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResponseAxios } from "./providers/response";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponseAxios>
      <GlobalStyle />
      <App />
    </ResponseAxios>
  </React.StrictMode>
);
