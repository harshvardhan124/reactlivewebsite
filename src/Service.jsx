import React from "react";
import Card from "./Card";
import Sdata from "./Sdata"
import Footer from "./Footer";
const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                            {Sdata.map((item,index)=>(
                                 <Card key={index} imgsrc={item.imgsrc} title={item.title} description={item.description}/>
                            ))}
                         
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
export default Service;




