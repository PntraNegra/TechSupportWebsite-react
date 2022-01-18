import React from 'react';

function OpenApp(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Opening Applications</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">Click on the lower left hand corner on the circle.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/chromebookapps.png" alt="Chromebook homescreen" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">Next search for the desired application either using the search bar, or clicking the arrow above the search bar to look through downloaded applications.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/appOpen.png" alt="App Search Bar" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">Double click on the desired application.</h5>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/zoomAppOpen.png" alt="zoom app" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">It may take a minute or two to open the application. Wait patient and the app will soon open.</h5>
                </div>
            </div>
        </div>

    );
}

export default OpenApp;