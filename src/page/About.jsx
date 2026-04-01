import React from "react";
import logo from "../profile.jpeg";

function About(){
    return(
        <div className="">
            <div className="row">
                <div className="col-sm-6 text-center mt-4">
                    <img src={logo} className="w-50 rounded border border-black"></img>
                </div>
                <div className="col-sm-6 mt-4">
                    <h2>Danial Mustaqim</h2>
                    <p>Danial is a recent graduate in Bachelor of Computer Science specifically in Big Data at MARA Technology University.</p>
                    <p>He is hardworking graduates and may not have extensive experience yet but currently developing foundational skills in Web Development. He eager to embrace new challenges and will prepared myself to tackle them with dedication and effort. He excited about incoming opportunity to grow and contribute meaningfully.</p>
                </div>
            </div>
        </div>
    );
}

export default About;