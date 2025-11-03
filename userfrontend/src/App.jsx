import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SetUser from "./SetUser";
import GetUser from "./GetUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SetUser />
      <GetUser />
    </>
  );
}
export default App;
