// import { useState } from "react";
import "./App.css";
import Projects from "./components/Projects/projects";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-header">
          <Header />
        </div>
        <div className="app-project-list">
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
