import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { NavbarData, navSocialMediaData } from './NavbarData';
import './Navbar.css';

function NavbarMobile() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <nav className="TopNav hide_on_large">
        <div className="navbarMobile">
            <Link to="#" className="hamburger-bars">
                <FaIcons.FaBars onClick={showSidebar} value={{color: 'blue'}}/>
            </Link>
            <div className="name-title">
                
                <NavLink to="/" className="side-nav-home">
                    Matt Szczerba
                </NavLink>
                <span className="green-text light">Full Stack Developer</span>
            </div>
        </div>
        {sidebar && <div className="nb-overlay" onClick={showSidebar}></div>}
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul onClick={showSidebar} className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to="#" className='hamburger-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>
                </li>
                {NavbarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <NavLink to={item.path} activeClassName="active">
                                {item.icon}
                                <span>{item.title}</span>
                            </NavLink>
                        </li>
                    )
                })}
                <li className="nav-text">
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
    </nav>
    </>
  )
}

export default NavbarMobile
