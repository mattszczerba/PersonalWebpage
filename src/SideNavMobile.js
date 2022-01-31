import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import { NavLink } from "react-router-dom";
import './Sidebar.css';

export default function SideNavMobile(){
    return (<>
        <Menu >
            <nav><ul>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/about">
                        About
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/experience">
                        Experience
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/projects">
                        Projects
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/skills">
                        Skills
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/education">
                        Education
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <NavLink activeClassName="active" to="/contact">
                        Contact
                    </NavLink>
                </li>
                <li className="side-nav-item">
                    <a activeClassName="active" href="https://docs.google.com/document/d/1-SKF413vg_KNZQSXuKGqQGD5BSzBF9ed/edit?usp=sharing&ouid=102584653941470394808&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/matt-szczerba-240278140" target="blank" title="linkedin.com">
                        <img className="navimg" src="https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/linkedin.png" alt="LinkedIn"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mattszczerba" target="blank" title="github.com">
                        <img className="navimg" src="https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/github.png" alt="Github"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/matt.szczerba/" target="blank" title="Facebook.com">
                        <img className="navimg" src="https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/facebook.png" alt="Facebook"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/skwizzerbz/" target="blank" title="instagram.com">
                        <img className="navimg" src="https://res.cloudinary.com/dow8www4d/image/upload/v1643235595/Webpage/instagram.png" alt="Instagram"/>
                    </a>
                </li>
            </ul></nav>
    
        </Menu></>
    )
}