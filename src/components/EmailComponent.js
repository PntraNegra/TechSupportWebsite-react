import React from 'react';

function Email(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Sending an Email</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        To send an E-mail, we will begin by opening Google Chrome. Once you are there search for your E-Mail server.
                        I use G-mail so I went to <a href="https://gmail.com" target="_blank">'Gmail.com'</a>.
                        <br />
                        Log in once you are on your E-mail's website.
                    </h5>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Once in gmail, I looked for the pencil to compose a message.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/gmail.png" alt="gmail pencil" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h5 className="mb-3">
                        When you get close to the pencil the sidebar will open more. Click on 'Compose'.
                    </h5>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-3" src="/imgEnglish/gmailsidebar.png" alt="gmail sidebar" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        It will open up a new window. On this new window fill in the recipient's E-mail, the message subject, and the message. After typing your message, click 'Send'.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/emailex.png" alt="window" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        To see if your message successfully sent, check on the left side of the page. Under the pencil search 'sent'.
                        <br /> Click on 'sent' and your recently sent message should appear on top.
                    </h5>
                </div>
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/sent.png" alt="Sent Messages" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Congratulations! You have sent an E-mail!
                    </h5>
                </div>
            </div>
        </div>

    );
}

export default Email;