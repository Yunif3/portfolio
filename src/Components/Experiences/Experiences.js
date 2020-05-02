import React, { Component } from 'react'
import "./Experiences.css"
import data from "../../data.json"

class ExperienceBlock extends Component {
    // TODO maybe have it read this info from json instead
    render () {
        return (
            <li className="timeline-event">
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-info">
                    <p className="timeline-event-thumbnail">{this.props.start_date} - {this.props.end_date}</p>
                    <h3>{this.props.job}</h3>
                    <h4>{this.props.role}</h4>
                    <ul className="timeline-event-description">{this.props.description}</ul>
                </div>
            </li>
        );
    }
}

class Experiences extends Component {
    render () {
        let blocks = data["experiences"].map((info) => {
            let desc_list = info.description.map((item) => {
                return (<li>{item}</li>);
            });
            return (
                <ExperienceBlock
                        start_date = {info.start_date}
                        end_date = {info.end_date}
                        job = {info.job}
                        role = {info.role}
                        description = {desc_list}
                />
            );
        });
        return (
            <div id={this.props.id} className="experiences-wrapper">
                <div id="experiences-title">Experiences</div>
                <ul className="timeline">
                    {blocks}
                </ul>              
            </div>
        );
    }
} 

export default Experiences;