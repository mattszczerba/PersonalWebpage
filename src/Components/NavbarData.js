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

export const navSocialMediaData =[
    {
        title: 'linkedin.com',
        link: 'https://www.linkedin.com/in/matt-szczerba-240278140',
        img: 'https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/linkedin.png',
        alt: 'LinkedIn',
        cName: 'navimg'
    },
    {
        title: 'github.com',
        link: 'https://github.com/mattszczerba',
        img: 'https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/github.png',
        alt: 'Github',
        cName:'navimg'
    },
    {
        title: 'Facebook.com',
        link: 'https://www.facebook.com/matt.szczerba/',
        img: 'https://res.cloudinary.com/dow8www4d/image/upload/v1643235594/Webpage/facebook.png',
        alt: 'Facebook',
        cName:'navimg'
    },
    {
        title: 'instagram.com',
        link: 'https://www.instagram.com/skwizzerbz/',
        img: 'https://res.cloudinary.com/dow8www4d/image/upload/v1643235595/Webpage/instagram.png',
        alt: 'Instagram',
        cName:'navimg'
    },

]
