import React from "react";

export default function Education(){
    return (
        <div>
            <div className="card-grid">
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://www2.ccsu.edu/_tmpl_home/img/apply-image.jpg" alt="CCSU"/>
                    </div>
                    <div className="cardHeader">
                        Central Connecticut State University
                    </div>
                    <div className="cardBody">
                        Bachelor’s Degree in Computer Science | 2020
                    </div>
                    <div className="cardFooter"></div>
                </div>
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1643841965/Webpage/tunxis.jpg" alt="TXCC"/>
                    </div>
                    <div className="cardHeader">Tunxis Community College</div>
                    <div className="cardBody">
                        Associates Degree in Computer Information Systems | 2014
                    </div>
                    <div className="cardFooter"></div>
                </div>
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1643842092/Webpage/SHS.jpg" alt="SHS"/>
                    </div>
                    <div className="cardHeader">Southington High School</div>
                    <div className="cardBody">
                        High School Diploma | 2009
                    </div>
                    <div className="cardFooter"></div>
                </div>
            </div>
        </div>
    );
}