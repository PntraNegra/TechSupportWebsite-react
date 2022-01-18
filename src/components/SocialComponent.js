import React from 'react';

function Social(){
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Social Media</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h5 className="mb-3">
                        Start by opening your preferred social media. For this example I am using facebook.
                    </h5>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h5 className="mb-3">
                        In the box, type your user name and password. After, click on 'Log In'. <br />
                        If you don't have an account, click on 'Create New Account'.
                    </h5>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-3" src="/imgEnglish/login.png" alt="facebook login" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h3 className="mb-3">
                        If you don't have an account, you use the following instructions.  
                    </h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h5 className="mb-3">
                        Type your name, E-mail and birthday. Click on 'Sign Up'.
                    </h5>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-3" src="/imgEnglish/pancho.png" alt="create account signup" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h5 className="mb-3">
                        Next a box will appear asking for a 5-digit number to verify your account.
                        It will send it through E-mail or text message, depending on what was used to sign up. In my case it was sent through E-Mail and I typed the code that was sent to me through E-mail.
                    </h5>
                </div>
                <div className="col-sm-6">
                    <img className="img-fluid mb-3" src="/imgEnglish/facecode.png" alt="facebook code" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <img className="img-fluid mb-3" src="/imgEnglish/emailcode.png" alt="facebook code in email" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">
                        After Typing the code a box will appear indicating your account is active.
                    </h5>
                </div>
                <div className="col">
                    <img src="/imgEnglish/accountconfirmed.png" alt="signed in" />
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <h5 className="mb-3">
                        Congratulations and stay safe on the internet!
                    </h5>
                </div>
            </div>
        </div>

    );
}

export default Social;