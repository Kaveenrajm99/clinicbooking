import React from 'react'
import smile from "../Images/smile.png"

function Footer() {
    return (
        <div className="container-fluid bg">
            <div className="row align-item-center foot-row">
                <div className="text-center mt-4 p-1 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <img src={smile} />
                </div>
                <div className="text-center mt-4 p-1 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3 open-timing">
                    <div className="row">
                        <div className="col-12">
                            <h5 className="open-font-size">We are Open On:</h5>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col">
                                    <h5 className="time-font-size">MON-SAT <br />9am-9pm</h5>
                                    <h5 className="time-font-size">SUNDAY <br />9am-2pm</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-4 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <h4 className="touch">Get in touch</h4>
                    <h5 className="whatsapp">Via whatsapp</h5>
                    <a className="btn btn-sm-2 btn-warning m-2 butt" href="https://wa.me/9944625605" target="_blank">9944625605</a>
                    <h5 className="call">or call 9944625605<br/><a className="email" id="mail" href="mailto:neosmiledentalomr@gmail.com">neosmiledentalomr@gmail.com</a></h5>
                </div>
                <div className="footer-container">
                    <p className="copy-right">
                            2022 Neosmile Dental. All Rights Reserved
                    </p>
                    <p className="design">
                            Designed by Raja
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer