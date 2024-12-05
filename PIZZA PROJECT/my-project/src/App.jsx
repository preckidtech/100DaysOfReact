import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import pizza from "../public/pizzas/focaccia.jpg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-700 text-left text-sm font-bold uppercase">
        Hello World!
      </h1>
      <img src={pizza} alt="" />
      <h2>Pizza World</h2>
      <img src={pizza} alt="" />
      <img src={pizza} alt="" />
    </>
  );
}

export default App;
