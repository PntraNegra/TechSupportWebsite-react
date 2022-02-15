import React, { Component } from 'react';
import CSCarousel from './CSCarouselComponent';
import ITCarousel from './ITSecCarouselComponent';
import MusicCarousel from './MusicCarouselComponent';


class Learn extends Component {
    
    
    render() {
        return (
            
            <div className="container">
                <div className="row row-content mb-4">
                    <div className="col text-center">
                        <h2>Learn Something New</h2>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-6">
                        <h4>IT Security Resources</h4>
                    </div>
                    
                </div>
                
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">Homeland Security Cybersecurity Resources</h5>
                        <p>This page lists cybersecurity resources and events that you may find beneficial.</p>
                        <a href="https://www.dhs.gov/science-and-technology/cybersecurity-resources">https://www.dhs.gov/science-and-technology/cybersecurity-resources</a>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <ITCarousel />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col">
                        <h4>Computer Science Resources</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Here will be posted Computer Science resources to learn skills like programming. The resources will be free, but almost all offer paid services and subscriptions as well.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">Free Code Camp</h5>
                        <p>Free code camp is a non-profit that contains many certification programs, tutorials and projects to help driven individuals earn certificates and learn how to code.</p>
                        <a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">Code Cademy</h5>
                        <p>Code Cademy has many certificates, programs and courses. Many of these are free, but some are only avaliable by subscription.</p>
                        <a href="https://www.codecademy.com/">https://www.codecademy.com/</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">W3 Schools</h5>
                        <p>W3 schools is a very good resource center, with avaliable tutorials. If you are ever coding your own project from scratch, reference code examples and snippits on W3 schools.</p>
                        <a href="https://www.w3schools.com/">https://www.w3schools.com/</a>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <CSCarousel />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col">
                        <h4>Music Theory &amp; Production Resources</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <p>Here will be posted resources on music theory foundations, principles, as well as music production recourses.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">The Pro Audio Files</h5>
                        <p>The pro audio files has many blogs and tutorials to help bring your recording, mixing and mastering skills to the next level.</p>
                        <a href="https://theproaudiofiles.com/">https://theproaudiofiles.com/</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">MusicTheory.net</h5>
                        <p>MusicTheory.net offers many tutorials to help teach sight reading, and understanding how to read write and compose sheet music.</p>
                        <a href="https://www.musictheory.net/lessons">https://www.musictheory.net/lessons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">Ableton | Learning Music</h5>
                        <p>Ableton is a popular Digital Audio Workstation that offers both a free version, and paid version of their software. This software is only available on windows and mac, but recently they have been working on a free resource teaching music production principles on the browser. Since this is created for the web, it is available to all modern browsers regardless of their operating system.</p>
                        <a href="https://learningmusic.ableton.com/">https://learningmusic.ableton.com/</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-3 mb-3">Sonic Pi</h5>
                        <p>Sonic Pi is a cross between live music production and live coding experience. It is a free application available on mac, windows and linux(linux may require download through command line). As well as being a free software, it also has a thorough tutorial teaching how to use it. If you are technically inclined, and like to entertain a crowd, this may be the perfect platform for you!</p>
                        <a href="https://sonic-pi.net/">https://sonic-pi.net/</a>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="offset-md-2 col-lg-8 col-md-10">
                        <MusicCarousel />
                    </div>
                </div>
            </div>
                
        );
    }
}

export default Learn;