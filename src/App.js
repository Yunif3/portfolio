import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Experiences from "./Components/Experiences/Experiences"
import Projects from "./Components/Projects/Projects"
import Awards from "./Components/Awards/Awards"

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Main id="home" next="#experiences"/>
        <Experiences id="experiences"/>
        <Projects id="projects"/>
        <Awards id="awards"/>
      </body>
      <footer>Yunsoo Kim 2020 | Made with React</footer>
    </div>
  );
}

export default App;
