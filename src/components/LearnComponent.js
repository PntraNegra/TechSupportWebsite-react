import React from 'react';

function Learn(props) {
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
            <div className="row row-content mt-3 mb-3">
                <div className="col-md-8 mx-auto">
                    <div id="itCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#itCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#itCarousel" data-slide-to="1"></li>
                            <li data-target="#itCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/images/itComputer.jpg" alt="Computer Desk" />
                                <div className="carousel-caption">
                                    <h3>IT Best Practices</h3>
                                    <p class="d-none d-sm-block">Learn Best Practices for keeping yourself safe online.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itLights.jpg" alt="Lights" />
                                <div className="carousel-caption">
                                    <h3>Learn to search for information</h3>
                                    <p className="d-none d-sm-block">It's impossible to know everything, but in a digital world we have the resources available to instantly search for answers.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itSecurity.jpg" alt="Locked Computer Keyboard" />
                                <div className="carousel-caption">
                                    <h3>Lock Down Your Computer</h3>
                                    <p className="d-none d-sm-block">Learn the best ways to keep your computer locked down and secured.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#itCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#itCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                            <button className="btn btn-danger btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-6 col-md-2">
                    <h4>Computer Science</h4>
                </div>
                <div className="col-6 col-md-2">
                    <button className="btn btn-large btn-success">Continue</button>
                </div>
            </div>
            <div className="row row-content mt-3 mb-3">
                <div className="col-md-8 mx-auto">
                    <div id="itCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#compCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#compCarousel" data-slide-to="1"></li>
                            <li data-target="#compCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/images/itComputer.jpg" alt="Computer Desk" />
                                <div className="carousel-caption">
                                    <h3>IT Best Practices</h3>
                                    <p class="d-none d-sm-block">Learn Best Practices for keeping yourself safe online.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itLights.jpg" alt="Lights" />
                                <div className="carousel-caption">
                                    <h3>Learn to search for information</h3>
                                    <p className="d-none d-sm-block">It's impossible to know everything, but in a digital world we have the resources available to instantly search for answers.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itSecurity.jpg" alt="Locked Computer Keyboard" />
                                <div className="carousel-caption">
                                    <h3>Lock Down Your Computer</h3>
                                    <p className="d-none d-sm-block">Learn the best ways to keep your computer locked down and secured.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#compCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#compCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                            <button className="btn btn-danger btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-6 col-md-2">
                    <h4>Music Theory</h4>
                </div>
                <div className="col-6 col-md-2">
                    <button className="btn btn-large btn-success">Continue</button>
                </div>
            </div>
            <div className="row row-content mt-3 mb-3">
                <div className="col-md-8 mx-auto">
                    <div id="musicCarousel" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#musicCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#musicCarousel" data-slide-to="1"></li>
                            <li data-target="#musicCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/images/itComputer.jpg" alt="Computer Desk" />
                                <div className="carousel-caption">
                                    <h3>IT Best Practices</h3>
                                    <p class="d-none d-sm-block">Learn Best Practices for keeping yourself safe online.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itLights.jpg" alt="Lights" />
                                <div className="carousel-caption">
                                    <h3>Learn to search for information</h3>
                                    <p className="d-none d-sm-block">It's impossible to know everything, but in a digital world we have the resources available to instantly search for answers.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/images/itSecurity.jpg" alt="Locked Computer Keyboard" />
                                <div className="carousel-caption">
                                    <h3>Lock Down Your Computer</h3>
                                    <p className="d-none d-sm-block">Learn the best ways to keep your computer locked down and secured.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#musicCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#musicCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                            <button className="btn btn-danger btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Learn;