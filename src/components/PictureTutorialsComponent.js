import React, { Component } from 'react';
import WifiEn from './WifiEnComponent';

class PictureTutorials extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render(){
        return (
            
                <div className="container">
                    <div className="row row-content">
                        <div className="col-12">
                            <h2 className="text-center">Picture Tutorials</h2>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a href="#wifi" className="text-light">Connecting to Wifi</a></button>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Update Computer</a></button>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Powering Down</a></button>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Opening Applications</a></button>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Remote Desktop</a></button>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Connecting to Zoom</a></button>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Sending an Email</a></button>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a>Social Media</a></button>
                        </div>
                        
                    </div>
                    <hr />
                    <div id="wifi" className="row row-content m-2">
                        <WifiEn />
                    </div>
                </div>
                
        );
    }
}

export default PictureTutorials;