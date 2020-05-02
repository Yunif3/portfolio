import React, { Component } from 'react'
import "./Awards.css"
import data from "../../data.json"

class AwardBlock extends Component {
    render () {
        return (
            <li className="award card">
                <div className="title"><span>{this.props.title}</span></div>
                <div className="description">{this.props.description}</div>
            </li>
        );
    }
}

class Awards extends Component {
    render () {
        let blocks = data["awards"].map((info) => {
            return (
              <AwardBlock
                title={info.title}
                description={info.description}
              />
            );
          });
        return (
            <ul id={this.props.id} className="awards-wrapper">
                <div id="awards-title">Achievements</div>
                {blocks}
            </ul>
        );
    }
}

export default Awards;
