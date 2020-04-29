import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
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
        <img src={logo} className="App-logo" alt="logo" />
        <section id="experiences">A</section>
        <section id="projects">B</section>
        <section id="awards">C</section>
      </body>
    </div>
  );
}

export default App;
