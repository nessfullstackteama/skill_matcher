import React, { Component } from 'react';

export default class Users extends Component {
    static propTypes = {};
  
    static defaultProps = {};
  
    render() {
      return (
          <div>
          <section className="content">
            <div className="box box-default">
                <div className="box-header with-border">
                    <h3 className="box-title">Filter Users</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                        <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="skill1">Skill</label>
                                <input type="text" class="form-control" id="skill1" placeholder="Enter skill tag"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Level</label>
                                <select className="form-control">
                                    <option>Junior</option>
                                    <option>Experienced</option>
                                    <option>Senior</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button type="submit" class="btn btn-info pull-right">Add Skill</button>
                        </div>
                    </div>
                </div>    
                <div className="box-footer">
                    <button type="submit" class="btn btn-primary">Search</button>
                </div>
                </div>
                
                <div className="box box-default">
                    <div className="box-header with-border">
                        <h3 className="box-title">Results</h3>
                    </div>

                    <div className="box-body no-padding">
                            <table class="table table-striped">
                                <tbody>
                                <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Match</th>
                                <th>Profile</th>
                                </tr>
                                <tr>
                                <td>1.</td>
                                <td>Alexander Pierce</td>
                                <td>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-danger"></div>
                                    </div>
                                </td>
                                <td>
                                    <button class="btn">View</button>
                                </td>
                                </tr>
                                
                                <tr>
                                <td>2.</td>
                                <td>Alexander Pierce</td>
                                <td>
                                    <div class="progress progress-xs">
                                        <div class="progress-bar progress-bar-danger"></div>
                                    </div>
                                </td>
                                <td><button class="btn">View</button></td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                </div>
            
          </section>
          </div>
      );
    }
  }