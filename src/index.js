import "./index.scss";
import AppProvider from "./context";
import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
