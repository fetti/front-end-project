/** React */
import ReactDOM from "react-dom/client";

/** Third-party komponens */
import { BrowserRouter } from "react-router-dom";

/** Komponens */
import App from "./App";

/** Tailwind CSS */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
