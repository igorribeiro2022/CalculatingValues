import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NetworkStatus } from "./providers/networkStatus";
import { ResponseAxios } from "./providers/response";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponseAxios>
      <NetworkStatus>
        <GlobalStyle />
        <App />
      </NetworkStatus>
    </ResponseAxios>
  </React.StrictMode>
);
