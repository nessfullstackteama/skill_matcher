import React, { Component, Fragment } from 'react';

export default class SkillTags extends Component {
    static propTypes = {};
  
    static defaultProps = {};
  
    render() {
      return (
          <Fragment>
          <section className="content">
          <div className="box box-primary">
            <div className="box-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Proposed</label>
                    <select multiple className="form-control">
                      <option>Ruby</option>
                      <option>WebForms</option>
                    </select>
                    <button class="btn pull-right">Approve</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Approved</label>
                    <select multiple className="form-control">
                      <option>C#</option>
                      <option>Java</option>
                      <option>Python</option>
                      <option>HTML</option>
                      <option>CSS</option>
                    </select>
                    <button class="btn pull-right">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
          </Fragment>
      );
    }
  }