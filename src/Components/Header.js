import React from 'react'
import Clock from "../Images/clock.gif"
import Call from "../Images/call.gif"
import Mail from "../Images/mail.gif"
import Whatsapp from "../Images/whatsapp.gif"
import smile from "../Images/smile.png"

function Header() {
  return (
    <div class="container-fluid top-container">
      <div className="row" id="show">
        <div className="mt-2 col-sm-12 col-md-3 col-lg-6 col-xl-6 col-xxl-6 timing"><img className="time" src={Clock} />Opening time: Mon - Sun : 9.30 am - 1.30 pm , 4.30 pm - 9.30 pm</div>
        <div className="mt-2 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mobile"><img className="time" src={Call} /> Call : 7200943938 <img className="time" src={Whatsapp} />8667085227</div>
        <div className="mt-2 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mail"><img className="time" src={Mail} /> neosmiledentalomr@gmail.com</div>
      </div>
      <div className="text-center ">
        <div className="col-12">
          <img className="logo" src={smile} /><br></br>
          <h1 className="top-logo">NEOSMILE</h1>
          <h5 className="logo-subhead">Dental &amp; implant center</h5>
        </div>
      </div>
    </div>
  )
}

export default Header