import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import about from "../Images/aboutpage.png"
import Service from "../Images/service.png"
import pricing from "../Images/pricing.png"
import insurance from "../Images/insurance.png"
import review from "../Images/review.png"
import contact from "../Images/appoint.png"
import Whatsapp from "../Images/whatsapp.gif"

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light nav">
                <div className="container nav-bar">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span><i class="fa fa-bars" aria-hidden="true" ></i></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link home" to={"about"}><img className="nav-image" src={about}/><br/>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"service"}><img className="nav-image" src={Service}/><br/>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"pricing"}><img className="nav-image" src={pricing}/><br/>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"contact"}><img className="nav-image" src={contact}/><br/>Contact</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar