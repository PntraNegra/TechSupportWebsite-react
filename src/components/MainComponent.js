import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import PictureTutorials from './PictureTutorialsComponent';
import VideoTutorials from './VideoTutorialsComponent';
import Learn from './LearnComponent';
import Documentation from './DocumentComponent';
import Login from './LoginComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import MusicResource from './MusicResourceComponent';
import CSResource from './CSResourceComponent';
import ITResource from './ITResourceComponent';

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
                    <Route exact path='/login' render={() => <Login />} />
                    <Route exact path='/music' render={() => <MusicResource />} />
                    <Route exact path='/computerScience' render={() => <CSResource />} />
                    <Route exact path='/itSecurity' render={() => <ITResource />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }

}

export default Main;