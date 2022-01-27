import React from "react";
import StoreApp from "./Store/StoreApp";

export default function Projects(){
    return (
        <div>
            <h2>Projects will be displayed here</h2>
            <p>Over time, I will be adding projects from my git here within preview cards. For now, here is a mock e-commerce page I created using React.</p>
            <div>
                <StoreApp />
            </div>
        </div>
    );
}