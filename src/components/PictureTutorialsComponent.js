import React, { Component } from 'react';
import WifiEn from './WifiEnComponent';
import Update from './UpdateEnComponent';
import PowerDown from './PoweringDownComponent';

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
                            <button className="btn btn-lg btn-block btn-info"><a href="#update" className="text-light">Update Computer</a></button>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info"><a href="#powerDown" className="text-light">Powering Down</a></button>
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
                    <div id="update" className="row row-content m-2">
                        <Update />
                    </div>
                    <div id="powerDown" className="row row-content m-2">
                        <PowerDown />
                    </div>
                </div>
                
        );
    }
}

export default PictureTutorials;