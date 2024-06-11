// import { useState } from "react";
import "./App.css";
import Projects from "./components/Projects/projects";
import Header from "./components/header/header";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <Projects />
      </div>
    </>
  );
}

export default App;
