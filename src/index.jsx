import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoaderPage } from "./providers/loader";
import { NetworkStatus } from "./providers/networkStatus";
import { ResponseAxios } from "./providers/response";
import GlobalStyle from "./styles/globalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResponseAxios>
      <NetworkStatus>
      <LoaderPage>
        <GlobalStyle />
        <App />
      </LoaderPage>
      </NetworkStatus>
    </ResponseAxios>
  </React.StrictMode>
);
