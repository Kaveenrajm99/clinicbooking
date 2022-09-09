import React, { useRef } from 'react'
import contact from "../Images/appoint.png"
import Animated from '../Animated'
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';



function Contact() {
    const form = useRef();
    let formik = useFormik({
        initialValues: {
            user_firstname: "",
            user_lastname: "",
            user_email: "",
            user_tel: "",
            user_date: "",
            user_address: "",
            user_city: "",
            user_state: "",
            user_message: "",
            user_timeofbooking: "",
            user_dateofbooking: ""
        }, validate: values => {
            const errors = {};

            if (!values.user_firstname) {
                errors.user_firstname = 'Enter your FirstName';
            }
            else if (!values.user_lastname) {
                errors.user_lastname = 'Enter your LastName';
            }
            else if (!values.user_email) {
                errors.user_email = 'Enter your EmailId should contain @gmail.com ';
            }
            else if (!values.user_tel) {
                errors.user_tel = 'Enter your Mobile Number Ex : 99xxxxxx00';
            }
            else if (!values.user_date) {
                errors.user_date = 'Enter your Date Of Birth ';
            }
            else if (!values.user_address) {
                errors.user_address = 'Enter your Address';
            }
            else if (!values.user_city) {
                errors.user_city = 'Enter your City';
            }
            else if (!values.user_state) {
                errors.user_state = 'Enter your State';
            }
            else if (!values.user_message) {
                errors.user_message = 'Share Your Thoughts';
            }
            else if (!values.user_timeofbooking) {
                errors.user_timeofbooking = 'Enter Booking Time ';
            }
            else if (!values.user_dateofbooking) {
                errors.user_dateofbooking = 'Enter Booking Date ';
            }
            return errors;
        },
        onSubmit: (values, { resetForm }) => {

        emailjs.sendForm('service_ifz8wnu', 'template_asr20um', form.current, 'oSPWabxh6SYj_Vvi1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        console.log(values)
        alert("Email send")
        resetForm()
    }

    });

    return (
        <Animated>
            <div className="container-fluid ">
                <div className="row about-row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 service">
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                        <Animated><div className="head-service"><img classname="service-image" src={contact} /><h1 className="service-heading">Contact</h1></div></Animated>
                    </div>
                </div>
                <div >
                    <h1 className="contact-head text-center">Booking For Checkup</h1>
                </div>
                <div>
                    <form ref={form} onSubmit={formik.handleSubmit} >

                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_firstname"
                                placeholder="First Name"
                                maxLength={10}
                                onChange={formik.handleChange}
                                value={formik.values.user_firstname} />
                            <span className='error'> {formik.errors.user_firstname}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_lastname"
                                placeholder="Last Name"
                                maxLength={10}
                                onChange={formik.handleChange}
                                value={formik.values.user_lastname} />
                            <span className='error'> {formik.errors.user_lastname}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="email"
                                className="form-control boxs"
                                name="user_email"
                                placeholder="Email"
                                onChange={formik.handleChange}
                                value={formik.values.user_email} />
                            <span className='error'> {formik.errors.user_email}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="tel"
                                className="form-control boxs"
                                name="user_tel"
                                placeholder="Tel-0000000000"
                                pattern="[0-9]{5}[0-9]{5}"
                                maxLength={10}
                                onChange={formik.handleChange}
                                value={formik.values.user_tel} />
                            <span className='error'> {formik.errors.user_tel}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="date"
                                className="form-control boxs"
                                name="user_date"
                                placeholder="DOB"
                                min="1980-01-01"
                                max="2020-12-31" onChange={formik.handleChange}
                                value={formik.values.user_date} />
                            <span className='error'> {formik.errors.user_date}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_address"
                                placeholder="Address"
                                maxLength={60}
                                onChange={formik.handleChange}
                                value={formik.values.user_address} />
                            <span className='error'> {formik.errors.user_address}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_city"
                                placeholder="City"
                                maxLength={15}
                                onChange={formik.handleChange}
                                value={formik.values.user_city} />
                            <span className='error'> {formik.errors.user_city}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_state"
                                placeholder="State"
                                maxLength={15}
                                onChange={formik.handleChange}
                                value={formik.values.user_state} />
                            <span className='error'> {formik.errors.user_state}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="time"
                                className="form-control boxs"
                                name="user_timeofbooking"
                                placeholder="Time of Booking"
                                min="09:00" max="21:00"
                                onChange={formik.handleChange}
                                value={formik.values.user_timeofbooking} />
                            <span className='error'> {formik.errors.user_timeofbooking}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="date"
                                className="form-control boxs"
                                name="user_dateofbooking"
                                placeholder="Date of Booking"
                                min="2022-09-01" max="2023-1-31"
                                onChange={formik.handleChange}
                                value={formik.values.user_dateofbooking} />
                            <span className='error'> {formik.errors.user_dateofbooking}</span>
                        </div>
                        <div className="input-container">
                            <input
                                type="text"
                                className="form-control boxs"
                                name="user_message"
                                placeholder="Any Message"
                                maxLength={100}
                                onChange={formik.handleChange}
                                value={formik.values.user_message} />
                            <span className='error'> {formik.errors.user_message}</span>
                        </div>
                        <div className=" input-container fw-bold">
                            <input type="submit" className="form-control " value="Submit" />
                        </div>
                    </form>
                </div>
                <div className="row contact-card ">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contact-enquiry">
                        <h5 className="contact-topics">For enquiry &amp; appointment Bookings</h5>
                        <p className="us">Whatsapp us:</p>
                        <a className="btn link" href='https://wa.me/9944625605' target="_blank">9944625605</a>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 contact-time">
                        <h5 className="contact-topics">For enquiry </h5>
                        <p className="zoop">email us :</p>
                        <a className="email ding btn link fs-4" href="mailto:neosmiledentalomr@gmail.com">neosmiledentalomr@gmail.com</a>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 contact-time">
                        <h5 className="contact-topics">We are opening hours are:</h5>
                        <p className="us">(Mon – sat) 9am – 9pm <br />(Sun) 9am – 2pm</p>
                    </div>
                </div>
            </div>
        </Animated>
    )
}

export default Contact