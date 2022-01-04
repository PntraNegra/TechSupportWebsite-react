import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render() {
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
                <div className="row row-content">
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastName" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange} />
                                </Col>                        
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                <Col md={10}>
                                    <Input type="tel" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        value={this.state.phoneNum}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 4, offset: 2}}>
                                    <FormGroup>
                                            <strong>How may we contact you?</strong>
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <Input type="select" name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleInputChange}>
                                        <option>By Phone</option>
                                        <option>By Email</option>
                                        <option>By Text</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="feedback" sm={12}>Please Describe Your Issue</Label>
                                <Col sm={12}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="12"
                                        value={this.state.feedback}
                                        onChange={this.handleInputChange}
                                        placeholder="Click here to begin typing..."></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Submit Request
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;