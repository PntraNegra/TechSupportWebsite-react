import React from 'react';

function MusicResource(){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="text-center">So you want to learn Music Theory and Production?</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <p>Here will be posted resources on music theory foundations, principles, as well as music production recourses.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <h3 className="text-center">Resources</h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">The Pro Audio Files</h5>
                    <p>The pro audio files has many blogs and tutorials to help bring your recording, mixing and mastering skills to the next level.</p>
                    <a href="https://theproaudiofiles.com/" className="text-dark">https://theproaudiofiles.com/</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">MusicTheory.net</h5>
                    <p>MusicTheory.net offers many tutorials to help teach sight reading, and understanding how to read write and compose sheet music.</p>
                    <a href="https://www.musictheory.net/lessons" className="text-dark">https://www.musictheory.net/lessons</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">Ableton | Learning Music</h5>
                    <p>Ableton is a popular Digital Audio Workstation that offers both a free version, and paid version of their software. This software is only available on windows and mac, but recently they have been working on a free resource teaching music production principles on the browser. Since this is created for the web, it is available to all modern browsers regardless of their operating system.</p>
                    <a href="https://learningmusic.ableton.com/" className="text-dark">https://learningmusic.ableton.com/</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5 className="mt-3 mb-3">Sonic Pi</h5>
                    <p>Sonic Pi is a cross between live music production and live coding experience. It is a free application available on mac, windows and linux(linux may require download through command line). As well as being a free software, it also has a thorough tutorial teaching how to use it. If you are technically inclined, and like to entertain a crowd, this may be the perfect platform for you!</p>
                    <a href="https://sonic-pi.net/" className="text-dark">https://sonic-pi.net/</a>
                </div>
            </div>
        </div>

    );
}

export default MusicResource;