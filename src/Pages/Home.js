import React from "react";

export default function Home(){
    return (
        <div className="bodyGrid">
            <h1 className="homeHeader">Welcome to my portfolio</h1>
            <div className="portrait">
                <img
                src="https://res.cloudinary.com/dow8www4d/image/upload/v1643308919/Webpage/portrait.jpg"
                height="275"
                width="193"
                className="rounded"
                alt=""
              />
            </div>
            <p className="homeGreeting">My name is Matt Szczerba and I am a full-stack developer. Feel free to become aquainted with me as I will be using this webpage as a central destination to showcase my work, experience, and projects.</p>
        </div>
    );
}