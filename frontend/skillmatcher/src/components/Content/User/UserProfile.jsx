import React, { Component, Fragment } from 'react';

export default class UserProfile extends Component {
    static propTypes = {};
  
    static defaultProps = {};
  
    constructor() {
      super();
      this.state = {
        user: {
          name: "John Doe",
          position: "Developer"
        }
      }
    }

    render() {
      return (
        <Fragment>
          <UserTitlePanel user={this.state.user}/>
          <UserSkills />
        </Fragment>
      );
    }
  }

  class UserTitlePanel extends Component {

    render() {
      return (
        <div class="box box-widget widget-user">
            <div class="widget-user-header bg-aqua-active">
                <h3 class="widget-user-username">{this.props.user.name}</h3>
                <h5 class="widget-user-desc">{this.props.user.position}</h5>
            </div>
        </div>
      );
    }
  }


  class UserSkills extends Component {
    
    constructor() {
      super();
      this.state = {
        data: [
          {tag: "C#", level: "junior", experience: 2}, 
          {tag: "Java", level: "senior", experience: 5}, 
          {tag: "HTML", level: "experienced", experience: 4}
        ]
      }
    }

    render() {
      return (

        <div className="box" >
            <div className="box-header">
              <h3 className="box-title">Skills</h3>
            </div>
            <div className="box-body no-padding">
              <table className="table table-striped">
                <tbody>
                <tr>
                  <th>#</th>
                  <th>Skill</th>
                  <th>Level</th>
                  <th>Years</th>
                </tr>
                {this.state.data.map((skill, index) => <SkillTableRow order={index + 1} data={skill} />)}
              </tbody>
              </table>
            </div>
          </div>
      );
    }
  }

  class SkillTableRow extends React.Component {
    render() {
      return (
        <tr>
          <td>{this.props.order}</td>
          <td>{this.props.data.tag}</td>
          <td>{this.props.data.level}</td>
          <td>{this.props.data.experience}</td>
        </tr>
      )
    }
  }
