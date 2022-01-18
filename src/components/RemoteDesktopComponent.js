import React from 'react';

function RemoteDesktop(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Using Remote Desktop</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">Open Google Chrome and go to <a href="https://Google.com" target="_blank">Google.com</a>. 
                        Click on the puzzle piece indicated in the picture below.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/google_snip.png" alt="Google page" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h5 className="mb-3">Next, click on the extension 'Chrome Remote Desktop'.</h5>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-3" src="/imgEnglish/extensions.png" alt="Chrome Extension" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        *Alternative method* Go directly to <a href="https://remotedesktop.google.com/support" target="_blank">remotedesktop.google.com/support</a>.
                        <br /> It will take you to the following page.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/remotedesktopgoogle.png" alt="Remote Desktop" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Click where it says 'Share This Screen', then click on 'Generate Code'.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/generate_code.png" alt="Generate Code" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        It will generate a 12 digit code. Give this 12 digit code to the We Care a Lot technician.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/code.png" alt="12 digit Code" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Once the technician has put the code in, it will ask you permission to share your screen.
                        <br />
                        To give permission click 'Share'.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/permision.png" alt="permission" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">
                        He now has temporary access to your computer!
                    </h5>
                </div>
            </div>
        </div>

    );
}

export default RemoteDesktop;