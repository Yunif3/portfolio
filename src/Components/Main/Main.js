import React, { Component } from 'react'
import './Main.css'
import ResumeIcon from './resume_icon.svg'
import LinkedinIcon from './linkedin_icon.svg'
import GithubIcon from './github_icon.svg'
import EmailIcon from './email_icon.svg'
import Resume from './Yunsoo_Resume.pdf'

class LinkBlock extends Component {
    render () {
        return (
            <div className="block">
                <a href={this.props.link}><img className="icon" src={this.props.src} alt="link"></img></a>
            </div>
        )
    }
}

class Main extends Component {
    render () {
        return (
            <div id={this.props.id} className="main-wrapper">
                <div className="center-page">
                    <div id="name-wrapper">
                        <h1 id="name">Yunsoo Kim</h1>
                        <div id="underline"></div>
                    </div>
                    <div className="link-blocks">
                        <LinkBlock link={Resume} src={ResumeIcon}/>
                        <LinkBlock link="https://www.linkedin.com/in/yunsoo/" src={LinkedinIcon}/>
                        <LinkBlock link="https://github.com/yunif3/" src={GithubIcon}/>
                        <LinkBlock link="mailto:yunsoo@umich.edu" src={EmailIcon}/>
                    </div>
                </div>
                <div className="bottom-page">
                    <a href={this.props.next}><div className="arrow bounce"></div></a>
                </div>
            </div>
        );
    }
}

export default Main;