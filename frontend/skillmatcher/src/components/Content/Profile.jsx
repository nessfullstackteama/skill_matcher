import React, { Component, Fragment } from 'react';
import UserProfile from './User/UserProfile';

export default class Profile extends Component {
    static propTypes = {};
  
    static defaultProps = {};
  
    render() {
      return (
          

          <Fragment>
          <section className="content">
          <div className="box">
            <UserProfile />
          </div>
          
          </section>
          </Fragment>
      );
    }
  }