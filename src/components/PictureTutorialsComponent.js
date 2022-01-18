import React, { Component } from 'react';
import WifiEn from './WifiEnComponent';
import Update from './UpdateEnComponent';
import PowerDown from './PoweringDownComponent';
import OpenApp from './OpeningApplicationsComponent';
import RemoteDesktop from './RemoteDesktopComponent';

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
                            <a href="#wifi" className="text-light"><button className="btn btn-lg btn-block btn-info">Connecting to Wifi</button></a>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <a href="#update" className="text-light"><button className="btn btn-lg btn-block btn-info">Update Computer</button></a>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <a href="#powerDown" className="text-light"><button className="btn btn-lg btn-block btn-info">Powering Down</button></a>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <a href="#openApps" className="text-light"><button className="btn btn-lg btn-block btn-info">Opening Applications</button></a>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <a href="#remoteDesktop" className="text-light"><button className="btn btn-lg btn-block btn-info">Remote Desktop</button></a>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info">Connecting to Zoom</button>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info">Sending an Email</button>
                        </div>
                        <div className="col-md-6 mt-2 mb-2">
                            <button className="btn btn-lg btn-block btn-info">Social Media</button>
                        </div>
                        
                    </div>
                    <hr />
                    <div id="wifi" className="row row-content m-2">
                        <WifiEn />
                    </div>
                    <hr />
                    <div id="update" className="row row-content m-2">
                        <Update />
                    </div>
                    <hr />
                    <div id="powerDown" className="row row-content m-2">
                        <PowerDown />
                    </div>
                    <hr />
                    <div id="openApps" className="row row-content m-2">
                        <OpenApp />
                    </div>
                    <hr />
                    <div id="remoteDesktop" className="row row-content m-2">
                        <RemoteDesktop />
                    </div>
                </div>
                
        );
    }
}

export default PictureTutorials;