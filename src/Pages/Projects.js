import React from "react";
import { Link } from "react-router-dom";
// import StoreApp from "../Store/StoreApp";

export default function Projects(){
    return (
        <div>
            {/* <h2>Projects will be displayed here</h2>
            <p>Over time, I will be adding projects from my git here within preview cards. For now, here is a mock e-commerce page I created using React.</p>
            <div>
                <StoreApp />
            </div> */}
            <div className="card-grid">
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1645376980/Webpage/ReactStoreScreenshot.png" alt="React-based mock storefront"/>
                    </div>
                    <div className="cardHeader">
                        Mock Storefront
                    </div>
                    <div className="cardBody">
                        Javascript with React
                    </div>
                    <div className="cardFooter">
                    <Link
                        to={`/projects/storefront/home`} 
                        // target="_blank"
                        className="submitButton"
                        data-tooltip="View Online"
                        data-position="top"
                        aria-label="Visit Mock Storefront web app"
                        >View <i class="fa fa-external-link"></i>
                    </Link>
                    <a
                        aria-label="Visit Mock Storefront Github code"
                        href="https://github.com/mattszczerba/ReactStore"
                        target="_blank"
                        data-position="top"
                        data-tooltip="View Github"
                        rel="noreferrer"
                        className="submitButton">
                            Github <i class="fa fa-github"></i>
                    </a>
                    </div>
                </div>
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1645377969/Webpage/TaskTrackerScreenshot.png" alt="Angular-based task tracker"/>
                    </div>
                    <div className="cardHeader">
                        Task Tracker
                    </div>
                    <div className="cardBody">
                        Javascript with Angular
                    </div>
                    <div className="cardFooter">

                        <a
                            href="https://tasktracker-mattszczerba.herokuapp.com/"
                            target="_blank"
                            className="submitButton"
                            data-tooltip="View Online"
                            data-position="top"
                            rel="noreferrer"
                            aria-label="Visit Task Tracker web app"
                            >View <i class="fa fa-external-link"></i>
                        </a>
                        <a
                            aria-label="Visit Mock Storefront Github code"
                            href="https://github.com/mattszczerba/Task-Tracker"
                            target="_blank"
                            data-position="top"
                            data-tooltip="View Github"
                            rel="noreferrer"
                            className="submitButton">
                                Github <i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1645399955/Webpage/TourOfHeroesScreenshot.png" alt="Angular-based Tour of Heroes"/>
                    </div>
                    <div className="cardHeader">
                        Tour of Heroes
                    </div>
                    <div className="cardBody">
                        Javascript with Angular
                    </div>
                    <div className="cardFooter">

                        <a
                            href="https://tourofheroes-mattszczerba.herokuapp.com/dashboard"
                            target="_blank"
                            className="submitButton"
                            data-tooltip="View Online"
                            data-position="top"
                            rel="noreferrer"
                            aria-label="Visit Tour of Heroes web app"
                            >View <i class="fa fa-external-link"></i>
                        </a>
                        <a
                            aria-label="Visit Tour of Heroes Github code"
                            href="https://github.com/mattszczerba/angular-tour-of-heroes"
                            target="_blank"
                            data-position="top"
                            data-tooltip="View Github"
                            rel="noreferrer"
                            className="submitButton">
                                Github <i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="cardHeader card-image">
                        <img src="https://res.cloudinary.com/dow8www4d/image/upload/v1645400189/Webpage/AuthenticatorScreenshot.png" alt="Java-based Two Factor Authenticator"/>
                    </div>
                    <div className="cardHeader">
                        Two-Factor Authenticator
                    </div>
                    <div className="cardBody">
                        Java with Eclipse
                    </div>
                    <div className="cardFooter">

                        <a
                            aria-label="Visit Two Factor Authenticator Github code"
                            href="https://github.com/mattszczerba/Two-Factor-Authentication"
                            target="_blank"
                            data-position="top"
                            data-tooltip="View Github"
                            rel="noreferrer"
                            className="submitButton">
                                Github <i class="fa fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}