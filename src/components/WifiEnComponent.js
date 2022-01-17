import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function WifiEn() {


    return (
        
        <div className="container">
            <div className="row row-content">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Connecting to Wifi</h3>
                </div>
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">To connect to wi-fi, look for the setting in the bottom lower right hand corner, and click where indicated in the picture.</p>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/connect_wifi.png" alt="Connecting to Wifi" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">Next, click on the setting indicated in the picture. This will open up your wi-fi settings.</p>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/connect_wifi_2.png" alt="Connecting to Wifi" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">Look for your connection within the available connections. When you find your connection, click on it and put in your wi-fi password.
            If the password is incorrect, you will be advised. If this happens, double check your credentials and try again. Passwords are case sensitive and it is easy to type it 
            incorrectly.</p>
                </div>
                <img className="img-fluid mb-3" src="/imgEnglish/connect_wifi_3.png" alt="Searching for Connection" />
            </div>
            <div className="row row-content">
                <div className="col">
                    <p className="mb-3">Congratulations, you are connected to the internet!</p>
                </div>
            </div>
        </div>
        
    );
}

export default WifiEn