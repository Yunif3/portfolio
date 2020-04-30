import React, { Component } from 'react';
import './Header.css'
import MenuLogo from './menu_icon.svg'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navlistRef = React.createRef();
        this.state = {
            current_sec: 'home',
        }
    }

    handle_nav_click(sec) {
        this.setState({
            current_sec: sec,
        });
    }

    handle_icon_click() {
        const navlist = this.navlistRef.current;
        navlist.classList.toggle('nav-open');
    }

    render () {
        let sections = ['Home', ...this.props.sections];
        let navlist = sections.map((sec) => {
            let lower_sec = sec.toLowerCase();
            let href_id = "#" + lower_sec;
            if (lower_sec === this.state.current_sec) {
                return (<li className="pointer current" onClick={() => this.handle_nav_click(lower_sec)}><a href={href_id}>{sec}</a></li>)
            }
            else {
                return (<li className="pointer" onClick={() => this.handle_nav_click(lower_sec)}><a href={href_id}>{sec}</a></li>)
            }
        });

        return (
            <nav id="nav-wrap" onLoad={() => this.handle_icon_click()}>
                {/* <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navidation">Hide navigation</a> */}
                <ul id="navlist" className="nav-item" ref={this.navlistRef}>
                    {navlist}
                </ul>
                <img id="nav-icon" className="nav-item" src={MenuLogo} alt="menu icon" onClick={() => this.handle_icon_click()}/>
            </nav>
        );
    }
}

class Header extends Component {
    render () {
        let sections = ['Experiences', 'Projects', 'Awards'];
        return (
            <header>
                <Navbar sections={sections}/>
            </header>
        )
    }
}

export default Header;