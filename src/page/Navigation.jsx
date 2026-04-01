import React from "react";
import { useState } from "react";

function Navigation(){

    const[isClose, setIsClose] = useState(false);

    const openCloseButton = () => {
        setIsClose(!isClose);
    }

    return(
        <div className="z-0 position-absolute w-100">
            <div className="d-flex flex-column">
                { isClose === false ? 
                <button className="btn btn-info rounded-0" onClick={() => openCloseButton()}>=</button>
                :<button className="btn btn-info rounded-0" onClick={() => openCloseButton()}>x</button>
                }

                <div className={`menu ${isClose ? "open" : ""}`}>
                    <button className="btn btn-primary rounded-0 text-start">About Danial</button>
                    <button className="btn btn-primary rounded-0 text-start">Experience</button>
                    <button className="btn btn-primary rounded-0 text-start">Education</button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;