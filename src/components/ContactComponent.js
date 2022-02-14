import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { user_id, template_id, service_id } from '../.emailKey';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        //e.preventDefault(); //commenting this line will cause the page to refresh, uncommenting this line will prevent the screen from refreshing
        emailjs.sendForm(service_id, template_id, form.current, user_id) //if you wish to make this code work this uses email JS. email JS will allow to to receive forms without having a backend set up.
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
        alert('Support request sent. Please expect a response within 24 hours Monday through Friday.')
    };

    return (

        <form ref={form} onSubmit={sendEmail}>
            <div className="row form-group">
                <div className="col-md-2">
                    <label>First Name</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" type="text" placeholder="First Name" name="firstName" />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-2">
                    <label>Last Name</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" type="text" placeholder="Last Name" name="lastName" />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-2">
                    <label>Phone</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" type="text" placeholder="Phone Number" name="phoneNum" />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-2">
                    <label>Email</label>
                </div>
                <div className="col-md-10">
                    <input className="form-control" type="text" placeholder="Email" name="email" />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-md-2">
                    <label>How Should we Contact You?</label>
                </div>
                <div className="col-md-10">
                    <select className="form-control" name="contactType">
                        <option>By Phone</option>
                        <option>By Email</option>
                        <option>By Text</option>
                    </select>
                </div>
            </div>
            <div className="row form-group">
                <div className="col-12">
                    <label>Please Describe Your Issue</label>
                </div>
                <div className="col-12">
                    <textarea className="form-control" name="feedback" rows="8" placeholder="Click here to begin typing..." />
                </div>
            </div>
            <input className="btn btn-md bg-primary text-light" type="submit" value="Submit Request" />
        </form>
    );
};
