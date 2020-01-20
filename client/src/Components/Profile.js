import React from 'react';
import axios from 'axios'
import deleteicon from '../Assets/delete.svg'
import completeicon from '../Assets/complete.svg'
import editicon from '../Assets/edit.svg'

export default class Profile2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: "",
      goals: [],
      apiDataLoaded: false,
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

  delete = async (e, goalToDelete) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3001/goals/${goalToDelete}`);
      const goals = this.state.goals.filter(goal => (
        goal.id !== goalToDelete
      ))
      this.setState({
        goals
      })
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <div>
        {user && (
          <div>
            <div className="profile">
              <img src={user.profile_pic_url} alt="profile" className="profile-image"></img>

              <section className="names">
                <h1>{user.first_name} {user.last_name}</h1>
                <h4 className="fun-fact">Fun Fact: "{user.fun_fact}"</h4>
              </section>

              <section className="location">
                <img className="pinpoint" src={props.pinpoint} alt="map"></img>
                <h4>{user.location}</h4>
              </section>
            </div >
            <div className="goals">
              <h3 className="blue-highlight">{user.first_name}'s Goals</h3>
              {goals.length > 0 ?
                <div>
                  <div className="goal-wrapper">
                    {goals.map(goal => (
                      <div className="single-goal" key={goal.id}>
                        <h4 className="blue-highlight">{goal.name}</h4>
                        <h5><span className="right">></span> My Motivation</h5>
                        <p>{goal.motivation}</p>
                        <h5><span className="right">></span> My Plan</h5>
                        <p>{goal.plan}</p>
                        <div className="task-buttons">
                          <img src={completeicon} className="task-single-button"></img>
                          <img src={editicon} className="task-single-button" id="edit-button"></img>
                          <img src={deleteicon} className="task-single-button" onClick={(e) => this.handleDelete(e, goal.id)}></img>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="end">🏁 Those are all of {user.first_name}'s goals... for now!</p>
                </div>
                :
                <h3 id="no-goals">{user.first_name} does not have any goals set up yet.</h3>
              }

            </div>
          </div>
        )}
      </div>
    )
  }
}