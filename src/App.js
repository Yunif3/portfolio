import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Experiences from "./Components/Experiences/Experiences"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <Main id="home" next="#experiences"/>
        <Experiences id="experiences"/>
        <Projects id="projects"/>
        <section id="awards">C</section>
      </body>
    </div>
  );
}

export default App;
