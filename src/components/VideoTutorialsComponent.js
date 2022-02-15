import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

function VideoTutorials(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col text-center">
                    <h2>Video Tutorials</h2>
                </div>
            </div>
            
            <div className="row row-content">
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#wifi" className="text-light"><button className="btn btn-lg btn-block btn-info">Connecting to Wifi</button></a>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#update" className="text-light"><button className="btn btn-lg btn-block btn-info">Update Computer</button></a>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#powerDown" className="text-light"><button className="btn btn-lg btn-block btn-info">Powering Down</button></a>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#openApps" className="text-light"><button className="btn btn-lg btn-block btn-info">Opening Applications</button></a>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#remoteDesktop" className="text-light"><button className="btn btn-lg btn-block btn-info">Remote Desktop</button></a>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#zoom" className="text-light"><button className="btn btn-lg btn-block btn-info">Connecting to Zoom</button></a>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#email" className="text-light"><button className="btn btn-lg btn-block btn-info">Sending an Email</button></a>
                </div>
                <div className="col-md-6 mt-2 mb-2">
                    <a href="#socialMedia" className="text-light"><button className="btn btn-lg btn-block btn-info">Social Media</button></a>
                </div>
                        
            </div>
            <hr />
            <div id="wifi" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Connecting to wifi</h3>
                    <YoutubeEmbed embedId="Si2TbcE0r0U" />
                </div>
            </div>
            <hr />
            <div id="update" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Updating Your Computer</h3>
                    <YoutubeEmbed embedId="7Uf4JQSpmq4" />
                </div>
            </div>
            <hr />
            <div id="powerDown" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Powering Down Your Computer</h3>
                    <YoutubeEmbed embedId="vH4aeYIXsNA" />
                </div>
            </div>
            <hr />
            <div id="openApps" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Opening Applications</h3>
                    <YoutubeEmbed embedId="8asJ0C20wWY" />
                </div>
            </div>
            <hr />
            <div id="remoteDesktop" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Using Remote Desktop</h3>
                    <YoutubeEmbed embedId="SWRV9EXVyrk" />
                </div>
            </div>
            <hr />
            <div id="zoom" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Joining a Zoom Meeting</h3>
                    <YoutubeEmbed embedId="SMbPgpjEmdw" />
                </div>
            </div>
            <hr />
            <div id="email" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Sending an Email</h3>
                    <YoutubeEmbed embedId="j13ZU1ZF7Xo" />
                </div>
            </div>
            <hr />
            <div id="socialMedia" className="row m-2">
                <div className="col">
                    <h3 className="text-center mt-3 mb-3">Social Media</h3>
                    <YoutubeEmbed embedId="pcPR2V5oQ4M" />
                </div>
            </div>
        </div>
    );
}

export default VideoTutorials;