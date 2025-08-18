import React from "react";
import { createRoot } from "react-dom/client";
import App from './App.js';
import Store from "./components/Redux/Store.js";
import { Provider } from "react-redux";


const container=document.getElementById('root');

const root=createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
