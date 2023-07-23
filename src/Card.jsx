import React from "react";
import { NavLink } from "react-router-dom";
const Card=(props)=>{
    return(
        <>
          <div className="col-md-4 col-10 mx-auto">
                                <div class="card" >
                                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">{props.description}</p>
                                        <NavLink to="#" className="btn btn-primary">Read</NavLink>
                                    </div>
                                </div>
                            </div>
        </>
    )
}
export default Card;