import React from 'react'
import Animated from '../Animated'
import about from "../Images/aboutpage.png"
import customer from "../Images/happy.png"
function About() {
  return (
    <Animated>
    <div className="container-fluid">
      <div className="row about-row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 about">
          <Animated></Animated>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 ">
          <Animated><div className="d-flex"><img classname="about-image" src={about}/> <h1 className="about-heading">About Neosmile</h1></div></Animated>
        </div>
      </div>
      <div className="row content-row">
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 about-neo">
          <div><h3 className="subhead">Our Philosophy of Care--</h3></div>
          <div><p className="about-para">Neosmile is about skill and precision.</p>
          <p className="about-para">We have the excellence to deliver the care that our patients need, and the integrity to only prescribe the care they need. With us, visiting the dentist should be a walk in the park: a safe and comfortable experience.</p>
          <p className="about-para"> We believe in providing options for our patients to choose from because we are in the business of care, not sales. Our patients can be assured that their welfare will never be compromised with us.</p>
          <p className="about-para">Thereby with this culture of consideration for our patients, we seek to foster a relationship of trust and naturally eliminate any fears of visiting a dentist.</p></div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 with-us">
          <div className="row add-row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <p className="qoutes">With us, visiting the dentist should be a walk in the park…</p>
            </div>
            <div  className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <img className="img-fluid happy-img" src={customer}/>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </Animated>
  )
}

export default About