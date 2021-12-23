import React from 'react';

function Home(props) {
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
                    <h5 className="offset-2">Check Out Our Tutorials!</h5>
                </div>
                <div className="col"></div>
            </div>
            <div className="row row-content m-1">
                <div className="col-12">
                    <h2 className="text-center">Support Request</h2>
                    <hr />
                </div>
                
            </div>
            <div className="col-md-10">
                <form>
                    <div className="form-group row">
                        <label for="firstName" className="col-md-3 col-form-label">First Name(required)</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" />
                        </div> 
                    </div>
                    <div className="form-group row">
                        <label for="lastName" className="col-md-3 col-form-label">Last Name(required)</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="areaCode" className="col-md-3 col-form-label">Phone Number(optional)</label>
                        <div className="col-5 col-md-3">
                            <input type="tel" className="form-control" id="areaCode" name="areaCode" placeholder="Area Code" />
                        </div>
                        <div className="col-6">
                            <input type="tel" className="form-control" name="telNum" placeholder="Tel. Number" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="email" className="col-md-3 col-form-label">Email(required)</label>
                        <div className="col-md-9">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <label>Preferred form of response</label>{' '}
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="phoneCall" name="contactRadios" value="phoneCall" /> 
                                <label for="phoneCall" className="form-check-label">Phone Call</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="textMessage" name="contactRadios" value="textMessage" /> 
                                <label for="textMessage" className="form-check-label">Text Message</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" id="email" name="contactRadios" value="email" /> 
                                <label for="email" className="form-check-label">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="feedback" className="col-12 col-form-label">Please Describe Your Issue</label>
                        <div className="col-12">
                            <textarea placeholder="Click here to begin typing..." nameName="feedback" class="form-control" id="feedback" rows="8"></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-12">
                            <button type="submit" className="btn btn-lg btn-primary">Submit Request</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Home;