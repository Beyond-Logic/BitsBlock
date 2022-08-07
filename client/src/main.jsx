import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TransactionsProvider } from "./context/TransactionContext";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TransactionsProvider>
    <React.StrictMode>
      <HashRouter>
      <App />
      </HashRouter>
     
    </React.StrictMode>
  </TransactionsProvider>
);
