import React, { Component, Fragment } from 'react';

export default class Welcome extends Component {
    static propTypes = {};
  
    static defaultProps = {};
  
    render() {
      return (
          <Fragment>
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
          </Fragment>
      );
    }
  }