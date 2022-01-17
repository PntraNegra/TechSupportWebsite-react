import React from 'react';

function PowerDown(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Powering Down your Computer</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">Click in the lower right hand corner.</p>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/chromebookdeskUpdate.png" alt="Homescreen" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">Click on the button indicated in the picture and your chromebook will turn off.</p>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/turnOff.png" alt="Turning off computer" />
            </div>
        </div>

    );
}

export default PowerDown;