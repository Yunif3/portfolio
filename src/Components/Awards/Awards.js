import React, { Component } from 'react'
import "./Awards.css"

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
        return (
            <ul id={this.props.id} className="awards-wrapper">
                <AwardBlock
                    title="Siemens Semifinalist some"
                    description="won blah balbh sakdjmfoejs iojoiajw a a a a a a eoirjewoinriowenhr"
                />
                <AwardBlock
                    title="Siemens Semifinalist"
                    description="won blah balbh sakdjmfoejs iojoiajw eoirjewoinriowenhr"
                />
            </ul>
        );
    }
}

export default Awards;
