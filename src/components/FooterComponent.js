import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col offset-sm-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/pictureTutorial'>Picture Tutorials</Link></li>
                            <li><Link to='/videoTutorial'>Video Tutorials</Link></li>
                            <li><Link to='/learn'>Learn Something New</Link></li>
                        </ul>
                    </div>
                    <div className="col  offset-sm-1">
                        <h5>Contact</h5>
                        <a role="button" className="btn btn-link" href="tel:+15303190982"><i className="fa fa-phone" /> 1(530)319-0982</a><br />
                        <a role="button" className="btn btn-link" href="mailto:bcervantes@wecarealot.org"><i className="fa fa-envelope-o" /> bcervantes@wecarealot.org</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;