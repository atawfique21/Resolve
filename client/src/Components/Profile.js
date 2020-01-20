import React, { Component } from 'react';
import axios from 'axios'
import deleteicon from '../Assets/delete.svg'
import completeicon from '../Assets/complete.svg'
import editicon from '../Assets/edit.svg'
import SweetAlert from 'react-bootstrap-sweetalert'

export default class Profile2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "",
      goals: [],
      apiDataLoaded: false,
      alert: null
    }
  }

  componentDidMount = async () => {
    try {
      const user = this.props.users.find(user => {
        return user.id === parseInt(this.props.userId)
      })
      const goals = this.props.goals.filter(goal => {
        return goal.user_id === parseInt(this.props.userId)
      })
      this.setState({
        user,
        goals,
        apiDataLoaded: true
      })
    } catch (e) {
      console.error(e)
    }
  }

  handleDelete = async (goalToDelete) => {
    try {
      await axios.delete(`http://localhost:3001/goals/${goalToDelete}`);
      const goals = this.state.goals.filter(goal => (
        goal.id !== goalToDelete
      ))
      this.setState({
        goals,
        alert: null
      })
    } catch (e) {
      console.error(e);
    }
  }


  goalComplete = async (e, completedGoalId) => {
    e.preventDefault();
    try {
      const goals = this.state.goals.filter(goal => (
        goal.id !== completedGoalId
      ))
      const completedGoal = this.state.goals.find(goal => (
        goal.id === completedGoalId
      ));
      completedGoal.is_complete = !completedGoal.is_complete
      this.setState({
        goals: [...goals, completedGoal]
      })
      await axios.put(`http://localhost:3001/goals/${completedGoalId}`, completedGoal);
    } catch (e) {
      console.error(e);
    }
  }

  confirmDelete(e, goalId) {
    e.preventDefault();
    const getAlert = () => (
      <SweetAlert
        danger
        showCancel
        showCloseButton
        cancelBtnBsStyle="default"
        confirmBtnText="Delete"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={() => this.handleDelete(goalId)}
        onCancel={this.hideAlert}
        focusCancelBtn
      >
        You will not be able to recover this goal!
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }

  hideAlert = () => {
    this.setState({
      alert: null
    });
  }

  render() {
    return (
      <div>
        {this.state.user && (
          <div>
            <div className="profile">
              <img src={this.state.user.profile_pic_url} alt="profile" className="profile-image"></img>

              <section className="names">
                <h1>{this.state.user.first_name} {this.state.user.last_name}</h1>
                <h4 className="fun-fact">Fun Fact: "{this.state.user.fun_fact}"</h4>
              </section>

              <section className="location">
                <img className="pinpoint" src={this.props.pinpoint} alt="map"></img>
                <h4>{this.state.user.location}</h4>
              </section>
            </div >
            <div className="goals">
              <h3 className="blue-highlight">{this.state.user.first_name}'s Goals</h3>
              {this.state.goals.length > 0 ?
                <div>
                  <div className="goal-wrapper">
                    {this.state.goals.map(goal => (
                      <div className={goal.is_complete ? "complete single-goal" : "incomplete single-goal"} key={goal.id}>
                        <h4 className="blue-highlight">{goal.name}</h4>
                        <h5><span className="right">></span> My Motivation</h5>
                        <p>{goal.motivation}</p>
                        <h5><span className="right">></span> My Plan</h5>
                        <p>{goal.plan}</p>
                        <div className="task-buttons">
                          <img src={completeicon} className="task-single-button" onClick={(e) => this.goalComplete(e, goal.id)}></img>
                          <img src={editicon} className="task-single-button" id="edit-button"></img>
                          <img src={deleteicon} className="task-single-button" onClick={(e) => this.confirmDelete(e, goal.id)}></img>
                          {this.state.alert}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="end">🏁 Those are all of {this.state.user.first_name}'s goals... for now!</p>
                </div>
                :
                <h3 id="no-goals">{this.state.user.first_name} does not have any goals set up yet.</h3>
              }

            </div>
          </div>
        )}
      </div>
    )
  }
}