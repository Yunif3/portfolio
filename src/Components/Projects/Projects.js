import React, { Component } from "react";
import "./Projects.css";
import a from "./poly.png";
import CodeIcon from "./code_icon.png";
import data from "../../data.json"

class ProjectBlock extends Component {
    // Later add a feature to filter through different skillset
  render() {
    let stacks = this.props.stacks;
    let stack_list = stacks.map((stack) => {
      return <li className="stack-item shadow">{stack}</li>;
    });
    let proj_label = this.props.proj_link == null ? <div className="label">N/A</div> : <div className="label">View Project</div>;
    // TODO remove or use the counter in css
    let indent = this.props.indent ? "project-block indent" : "project-block";
    return (
    <div className={indent}>
      <div className="card">
        <div className="project">
          <a className="link" href={this.props.proj_link}>
            <div className="shadow">
                <img className="preview hexagon" src={this.props.proj_img}></img>
                {proj_label}
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

// TODO FIXME change the picture to show the image of project
class Projects extends Component {
  render() {
    let blocks = data["projects"].map((info) => {
      let desc_list = info.description.map((item) => {
          return (<li>{item}</li>);
      });
      return (
        <ProjectBlock
        proj_link= {info.proj_link}
        code_link= {info.code_link}
        proj_img= {a}
        title= {info.title}
        stacks= {info.stacks}
        description= {desc_list}
        />
      );
    });
    return (
      <div id={this.props.id} className="projects-wrapper">
        <div id="section-title">Projects</div>
        {blocks}
      </div>
    );
  }
}

export default Projects;
