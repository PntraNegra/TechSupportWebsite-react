import React, { props } from 'react';

function Documentation(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">Documentation</h1>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="offset-sm-1 col-1">
                    <i class="fa fa-lg fa-plus-circle" />
                </div>
                <div className="col">
                    <h5>Add New Client</h5>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="offset-sm-1 col-1">
                    <i class="fa fa-lg fa-plus-circle" />
                </div>
                <div className="col">
                    <h5>Add New Note</h5>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="offset-sm-1 col-1">
                    <i class="fa fa-lg fa-plus-circle" />
                </div>
                <div className="col">
                    <h5>Make an Adjustment</h5>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="offset-sm-1 col-1">
                    <i class="fa fa-lg fa-minus-circle" />
                </div>
                <div className="col">
                    <h5>Remove Existing Client</h5>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col text-center">
                    <p><em>Oops... It appears their are no existing clients.<br /> They will appear here as they are added.</em></p>
                </div>
            </div>
        </div>
    );
};

export default Documentation