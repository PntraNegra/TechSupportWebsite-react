import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            touched: {
                username: false,
                password: false,
            }
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
        alert('current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(username, password) {

        const errors = {
            username: '',
            password: ''
        };

        if (this.state.touched.username) {
            if (username.length < 5) {
                errors.username = 'Username must be at least 5 characters.';
            } else if (username.length > 15) {
                errors.username = 'Username must be 15 or less characters.';
            }
        }

        if (this.state.touched.password) {
            if (password.length < 5) {
                errors.password = 'Password must be at least 5 characters.';
            } else if (password.length > 15) {
                errors.password = 'Password must be 15 or less characters.';
            }
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    render() {
        const errors = this.validate(this.state.username, this.state.password);

        return (
            <div className="container mb-5">
                <div className="row row-content m-1">
                    <div className="col-12">
                        <h2 className="text-center">Please Login to Access Documentation</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-md-10">
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label htmlFor="username" md={2}>Username</Label>
                                <Col md={10}>
                                    <Input type="text" id="username" name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        invalid={errors.username}
                                        onBlur={this.handleBlur("username")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="password" md={2}>Password</Label>
                                <Col md={10}>
                                    <Input type="password" id="password" name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        invalid={errors.password}
                                        onBlur={this.handleBlur("password")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size: 10}}>
                                    <Button type="submit" color="primary">
                                        Login
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

export default Login