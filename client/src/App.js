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

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>Skill Matcher</h1>
          </section>
          <section className="content">
          <div className="box box-primary">
            <div className="box-header with-border">
              Welcome!
            </div>
            <div className="box-body">
              comming soon...
            </div>
          </div>
          </section>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
