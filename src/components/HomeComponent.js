import React from 'react';
import { ContactUs } from './ContactComponent';

function Home() {
    return (
        <div className="container mb-5">
            <div className="row row-content">
                <div className="col-12">
                    <h2 className="text-center">We Care A Lot Tech Support</h2>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-8">
                    <h5>Welcome to the tech support home page!</h5><br />
                    <p> For a request for technical support, I invite you to fill out the form below. Expect a response within 24 hours during business hours (Monday through Friday 8am to 5pm) otherwise feel free to continue throughout the website! </p><br />
                    <h5>Think You Can Solve it Yourself?</h5>< br/>
                    <h5 className="offset-sm-3">Check Out Our Tutorials!</h5>
                </div>
                <div className="col"></div>
            </div>
            <div className="row row-content m-1">
                <div className="col-12">
                    <h2 className="text-center">Support Request</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ContactUs />
                </div>
            </div>
        </div>

    );
}

export default Home;