import React, { Component } from "react";
import "./Projects.css";
import a from "./poly.png";
import CodeIcon from "./code_icon.png";
class ProjectBlock extends Component {
    // Later add a feature to filter through different skillset
  render() {
    let stacks = this.props.stacks;
    let stack_list = stacks.map((stack) => {
      return <li className="stack-item shadow">{stack}</li>;
    });
    // TODO remove or use the counter in css
    let indent = this.props.indent ? "project-block indent" : "project-block";
    return (
    <div className={indent}>
      <div className="card">
        <div className="project">
          <a className="link" href={this.props.proj_link}>
            <div className="shadow">
                <img className="preview hexagon" src={this.props.proj_img}></img>
                <div className="label">View Project</div>
            </div>
          </a>
          <a className="link" href={this.props.code_link}>
            <div className="shadow">
                <img className="code hexagon" src={CodeIcon}></img>
                <div className="label">View Code</div>
            </div>
          </a>
        </div>
        <div className="info">
            <div className="test">
                
          <div className="project-title">
            {this.props.title}
            <div className="underline"></div>
          </div>
            </div>
          <ul className="stack-list">{stack_list}</ul>
          <div className="project-description">{this.props.description}</div>
        </div>
        </div>  
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    let stacks = ["C++", "HTML", "Python"];
    return (
      <div id={this.props.id} className="projects-wrapper">
        <div id="section-title">Projects</div>
        <ProjectBlock
          proj_link="https://www.temp.com"
          code_link="https://www.google.com"
          proj_img={a}
          title="Logical Calculator"
          stacks={stacks}
          description="this is some random description about the project. blah blah blah blahbl abiohjsaoidhfoi ewio"
        ></ProjectBlock>
        <ProjectBlock
          
          proj_link="https://www.temp.com"
          code_link="https://www.google.com"
          proj_img={a}
          title="Logical Calculator"
          stacks={stacks}
          description="this is some random description about the project. blah blah blah blahbl abiohjsaoidhfoi ewio"
        ></ProjectBlock>
        <ProjectBlock
          proj_link="https://www.temp.com"
          code_link="https://www.google.com"
          proj_img={a}
          title="Logical Calculator"
          stacks={stacks}
          description="this is some random description about the project. blah blah blah blahbl abiohjsaoidhfoi ewio"
        ></ProjectBlock>
        <main>
</main>
      </div>
    );
  }
}

export default Projects;
