import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
// import 'admin-lte/dist/js/adminlte';
import 'admin-lte/build/js/Tree';
import 'admin-lte/build/js/Layout';
import 'admin-lte/build/js/ControlSidebar';
import 'admin-lte/build/js/PushMenu';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from './components/Content/Users';
import Welcome from './components/Content/Welcome';
import SkillTags from './components/Content/SkillTags';
import Profile from './components/Content/Profile';
import Statistics from './components/Content/Statistics';

class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <Route exact path="/" component={Welcome}/>
          <Route path="/users" component={Users}/>
          <Route path="/skilltags" component={SkillTags}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/statistics" component={Statistics}/>
        </div>
        <Footer />
      </Fragment>
      </Router>
    );
  }
}


export default App;
