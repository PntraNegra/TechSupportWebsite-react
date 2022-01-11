import React, { Component } from 'react';
import CSCarousel from './CSCarouselComponent';
import ITCarousel from './ITSecCarouselComponent';
import MusicCarousel from './MusicCarouselComponent';


class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    render() {
        return (
            
            <div className="container">
                <div className="row row-content mb-4">
                    <div className="col text-center">
                        <h4>Learn Something New</h4>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-6 col-md-2">
                        <h4>IT Security</h4>
                    </div>
                    <div className="col-6 col-md-2">
                        <button className="btn btn-large btn-success">Continue</button>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <ITCarousel />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-6 col-md-2">
                        <h4>Computer Science</h4>
                    </div>
                    <div className="col-6 col-md-2">
                        <button className="btn btn-large btn-success">Continue</button>
                    </div>
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <CSCarousel />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-6 col-md-2">
                        <h4>Music Theory & Production</h4>
                    </div>
                    <div className="col-6 col-md-2">
                        <button className="btn btn-large btn-success">Continue</button>
                    </div>
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <MusicCarousel />
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Learn;