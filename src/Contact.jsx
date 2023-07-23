import React, { useState } from "react";
import Footer from "./Footer";
const Contact = () => {
    const [data, setdata] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setdata((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} `)
    }
    return (
        <>
            <div
                className="my-1">
                <h1
                    className="text-center">
                    Contact Us
                </h1>
            </div>
            <div
                className="container contact_div">
                <div
                    className="row">
                    <div
                        className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div
                                className="form-group row my-2">
                                <label htmlFor="inputMobile" className="col-sm-2 col-form-label pb-2">
                                    Mo.Num
                                    <br />
                                </label>
                                <input
                                    type="name"
                                    class="form-control"
                                    id="inputPassword"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Name" />

                            </div>
                            <div
                                className="form-group row my-2">
                                <label
                                    for="inputMobile"
                                    className="col-sm-2 col-form-label pb-2">
                                    Mo.Num
                                    <br />
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    id="inputPassword"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Mobile Number"
                                />

                            </div>
                            <div
                                className="form-group row my-2">
                                <label
                                    for="inputPassword"
                                    className="col-sm-10 col-form-label">
                                    Messages
                                </label>
                                <textarea
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Messages"
                                    name="msg"
                                    value={data.msg}
                                    onChange={InputEvent}
                                    rows="3">
                                </textarea>
                            </div>

                            <div className="form-group row">
                                <label
                                    for="staticEmail"
                                    class="col-sm-2 col-form-label my-1 block">
                                    Email
                                </label>

                                <input type="text" class="form-control" id="staticEmail"

                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent} placeholder="email@example.com" />

                            </div>

                            <div className=" submit-btn my-13">
                                <button className="btn btn-primary text-center my-12" type="submit">
                                    Submit Form
                                </button>
                            </div>
                            
                        </form>
                       
                    </div>
                    
                </div>
            </div><div className="mt-5"> <Footer/>  </div>
             
        </>
    )
}
export default Contact;




