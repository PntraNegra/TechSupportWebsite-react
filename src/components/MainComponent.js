import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import PictureTutorials from './PictureTutorialsComponent';
import VideoTutorials from './VideoTutorialsComponent';
import Learn from './LearnComponent';
import Documentation from './DocumentComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component= {HomePage} />
                    <Route exact path='/pictureTutorial' render={() => <PictureTutorials />} />
                    <Route exact path='/videoTutorial' render={() => <VideoTutorials />} />
                    <Route exact path='/learn' render={() => <Learn />} />
                    <Route exact path='/documentation' render={() => <Documentation />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }

}

export default Main;