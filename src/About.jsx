import React from "react";
import Common from "./Common";
import web from "../src/img/2.png";
import Footer from "./Footer";
const About=()=>{
    const title="Welcome to About Page"
    return(
        <>
        <div className="about">
        <Common title={title} imgsrc={web}visit={"/contact"} btnText={"Contact Now"}/>
       
        </div>
        <div className="mt-5">
        <Footer/>
        </div>
        </>
    )
}
export default About;




