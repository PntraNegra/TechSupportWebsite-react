import React from 'react';

function ITResource(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center mb-3">So you want to learn IT Security?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p>As it security newsletters are created, they will be posted onto this resource page. Additionally, IT security resources will be posted here.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="text-center">Resources</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">Homeland Security Cybersecurity Resources</h5>
                    <p>This page lists cybersecurity resources and events that you may find beneficial.</p>
                    <a href="https://www.dhs.gov/science-and-technology/cybersecurity-resources" className="text-dark">https://www.dhs.gov/science-and-technology/cybersecurity-resources</a>
                </div>
            </div>
        </div>

    );
}

export default ITResource;