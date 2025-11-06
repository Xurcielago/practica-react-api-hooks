import { createRoot } from "react-dom/client";
import "./index.css";
// import { Home } from "./pages/Home";
import { MultipleCustomHooks } from "./pages/MultipleCustomHooks";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <MultipleCustomHooks />
  // </StrictMode>
);
