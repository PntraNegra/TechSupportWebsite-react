import React from 'react';

function Zoom(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Joining a Zoom Meeting</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        In the invitation look for the link, then click on the link.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/link_zoom.png" alt="Zoom invitation link" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        It will take you to the zoom website and ask permission to open the zoom app. Click on 'Allow' 
                        to open the app and enter the meeting.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/permision_zoom.png" alt="zoom permission request" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        If it asks for a password, you can find this on the invitation.
                        <br />
                        The following steps are for if there is no link on the invitation.
                        <br />
                        <br />
                        <ul>
                            <li>Start by opening the zoom app.</li> 
                            <li>Type your E-mail and password for your zoom account.</li> 
                            <li>Click on 'Sign In'.</li> 
                        </ul>
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/zoom_app_login.png" alt="Zoom app login" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Click on 'Join'.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/join.png" alt="join" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        <ul>
                            <li>Type meeting ID.</li>
                            <li>Choose if you would like to connect with audio and video.</li>
                            <li>Click on join.</li>
                        </ul>
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/join_meeting.png" alt="Enter" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        If it asks for a password, Type the password included in the invitation.
                        <br />
                        <br />
                        If it doesn't immediately let you in don't worry. Frequently for security reasons, the host is required to let you enter into the meeting.
                    </h5>
                </div>
            </div>
        </div>

    );
}

export default Zoom;