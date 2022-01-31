import React from "react";
import { NavLink } from "react-router-dom";
import SideNavMobile from "./SideNavMobile";

export default function TopNav(){
    return (
        <nav className="TopNav hide_on_large">
            <SideNavMobile pageWrapID={'page-wrap'} outerContainerID={'outer-container'} />
            <div className="name-title">
                <NavLink to="/" className="side-nav-home">
                    Matt Szczerba
                </NavLink>
                <span className="green-text light">Full Stack Developer</span>
            </div>
        </nav>
    );
}