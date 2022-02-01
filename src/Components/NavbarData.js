import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as GoIcons from "react-icons/go";


export const NavbarData = [
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsFillPersonFill/>,
        cName: 'nav-text'
    },
    {
        title: 'Experience',
        path: '/experience',
        icon: <AiIcons.AiOutlineCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiOutlineFundProjectionScreen/>,
        cName: 'nav-text'
    },
    {
        title: 'Skills',
        path: '/skills',
        icon: <GoIcons.GoGraph/>,
        cName: 'nav-text'
    },
    {
        title: 'Education',
        path: '/education',
        icon: <FaIcons.FaGraduationCap/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiOutlineMessage/>,
        cName: 'nav-text'
    },
]
