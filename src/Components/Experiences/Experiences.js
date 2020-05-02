import React, { Component } from 'react'
import "./Experiences.css"

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
                    <p>{this.props.description}</p>
                </div>
            </li>
        );
    }
}

class Experiences extends Component {
    render () {
        return (
            <div id={this.props.id} className="experiences-wrapper">
                <div id="experiences-title">Experiences</div>
                <ul className="timeline">
                    <ExperienceBlock
                        start_date = "January 1"
                        end_date = "Present"
                        job = "Instructional Aide"
                        role = "EECS 203 and 183 IA"
                        description = "I taught for blah blah blah blabh blah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabh"
                    />
                    <ExperienceBlock
                        start_date = "January 1"
                        end_date = "Present"
                        job = "Instructional Aide"
                        role = "EECS 203 and 183 IA"
                        description = "I taught for blah blah blah blabh blah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabh"
                    />
                    <ExperienceBlock
                        start_date = "January 1"
                        end_date = "Present"
                        job = "Instructional Aide"
                        role = "EECS 203 and 183 IA"
                        description = "I taught for blah blah blah blabh blah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabhblah blah blah blabh"
                    />
                </ul>              
            </div>
        );
    }
} 

export default Experiences;