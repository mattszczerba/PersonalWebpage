import React from "react";
import { NavLink } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import { NavbarData, navSocialMediaData } from './NavbarData';

export default function SideNav(){
    return (
        <nav className="SideNav hide_on_small">
            <ul>
                <li className="side-nav-logo">
                    <NavLink to="/" className="side-nav-home">
                        Matt Szczerba<br/>
                        <span className="green-text light">Full Stack Developer</span>
                    </NavLink>
                </li>
                {NavbarData.map((item,index) => {
                    return(
                        <li key={index} className="side-nav-item">
                            <NavLink to={item.path} activeClassName="active">
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}

                <li className="side-nav-item">
                    <a activeClassName="active" href="https://docs.google.com/document/d/1-SKF413vg_KNZQSXuKGqQGD5BSzBF9ed/edit?usp=sharing&ouid=102584653941470394808&rtpof=true&sd=true" target="_blank" rel="noreferrer">
                        <IoIcons.IoIosPaper/>
                        <span>Resume</span>
                    </a>
                </li>
                <div  className='nav-social-media'>
                    {navSocialMediaData.map((item, index) => {
                        return(
                            <li>
                                <a href={item.link} target="blank" title={item.title}>
                                    <img className={item.cName} src={item.img} alt={item.alt} />
                                </a>
                            </li>
                        )
                    })}
                </div>
            </ul>
        </nav>
    );
}