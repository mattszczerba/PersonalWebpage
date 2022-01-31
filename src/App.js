import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home.js";
import About from "./About.js";
import Experience from "./Experience";
import Projects from "./Projects"; 
import Skills from "./Skills";
import Contact from "./Contact";
import SideNav from "./SideNav.js";
import Education from "./Education.js";
import TopNav from "./TopNav.js";

function App(){
    return (
        <BrowserRouter>
        <SideNav />
        <TopNav />
            <div  className="main-container main-container_margin">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/experience">
                        <Experience />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/skills">
                        <Skills />
                    </Route>
                    <Route exact path="/education">
                        <Education />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;