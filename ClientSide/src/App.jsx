import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import ClientRouter from "./Component/Routing";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClientRouter />
    </>
  );
}

export default App;
