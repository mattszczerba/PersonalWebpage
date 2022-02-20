import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects"; 
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import SideNav from "./Components/SideNav.js";
import Education from "./Pages/Education.js";
import NavbarMobile from "./Components/NavbarMobile.js";
import StoreApp from "./Store/StoreApp";

function App(){
    return (
        <BrowserRouter>
        <SideNav />
        <NavbarMobile />
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
                    <Route exact path="/projects/storefront/home">
                        <StoreApp />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;