import React from "react";

export default function Education(){
    return (
        <div>
            <div className="card-grid">
                <div className="educationCard">
                    <div className="educationCardHeader card-image">
                        <img src="https://www2.ccsu.edu/_tmpl_home/img/apply-image.jpg" />
                    </div>
                    <div className="educationCardHeader">
                        Central Connecticut State University
                    </div>
                    <div className="educationCardBody">
                        Bachelor’s Degree in Computer Science | 2020
                    </div>
                    <div className="educationCardFooter"></div>
                </div>
                <div className="educationCard">
                    <div className="educationCardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1643841965/Webpage/tunxis.jpg" />
                    </div>
                    <div className="educationCardHeader">Tunxis Community College</div>
                    <div className="educationCardBody">
                        Associates Degree in Computer Information Systems | 2014
                    </div>
                    <div className="educationCardFooter"></div>
                </div>
                <div className="educationCard">
                    <div className="educationCardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1643842092/Webpage/SHS.jpg" />
                    </div>
                    <div className="educationCardHeader">Southington High School</div>
                    <div className="educationCardBody">
                        High School Diploma | 2009
                    </div>
                    <div className="educationCardFooter"></div>
                </div>
            </div>
        </div>
    );
}