import React from "react";
import Navigation from "./Navigation";
import About from "./About";

function MainResume(){
    return(
        <div className="">
            <div className="w-100 position-absolute z-1">
                <Navigation />
            </div>
            <div className="position-relative z-0 pt-5 px-3">
                <div>
                    <About/>
                </div>
                <p>jfjdjbdjb</p>
                <p>jfjdjbdjb</p>
            </div>
        </div>
    );
}

export default MainResume;