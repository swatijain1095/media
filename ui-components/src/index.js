import React from "react";
import ReactDOM from "react-dom/client";
import { Input } from "./components";

const App = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
