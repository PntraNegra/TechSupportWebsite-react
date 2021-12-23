import React from 'react';

function PictureTutorials(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <h2 className="text-center">Picture Tutorials</h2>
                </div>
            </div>
            <div className="row row-content m-2">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Connecting to Wifi</a></button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Update Computer</a></button>
                </div>
            </div>
            <div className="row row-content m-2">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Powering Down</a></button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Opening Applications</a></button>
                </div>
            </div>
            <div className="row row-content m-2">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Remote Desktop</a></button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Connecting to Zoom</a></button>
                </div>
            </div>
            <div className="row row-content m-2">
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Sending an Email</a></button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-lg btn-block btn-info"><a>Social Media</a></button>
                </div>
            </div>
        </div>
    );
}

export default PictureTutorials;