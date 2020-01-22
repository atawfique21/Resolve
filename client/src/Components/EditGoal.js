import React from 'react'
import Popup from 'reactjs-popup'
import editicon from '../Assets/edit.svg'
import axios from 'axios'

export default class EditGoal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      motivation: "",
      plan: "",
      errorText: ""
    }
  }

  componentDidMount = async () => {
    try {
      const goalResponse = await axios(`https://intense-sands-64987.herokuapp.com/goals/${this.props.goalId}`);
      let goal = goalResponse.data;
      this.setState({
        title: goal.name,
        motivation: goal.motivation,
        plan: goal.plan
      })
    } catch (e) {
      console.error(e)
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleEdit(e, { name: this.state.title, motivation: this.state.motivation, plan: this.state.plan }, this.props.goalId)
    this.setState({
      emoji: "",
      title: "",
      motivation: "",
      plan: "",
      errorText: ""
    })
  }

  render() {
    return (
      <Popup trigger={<img
        src={editicon}
        className="task-single-button"
        id="edit-button"
      >
      </img>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}><h5>X</h5></a>
            <div className="header"> Edit Goal </div>
            <form onSubmit={(e) => { this.handleSubmit(e); close(); }} >
              {this.errorText && <p className="error-text">{this.errorText}</p>}
              <span className="field">
                <label htmlFor="Title"><span className="blue-highlight white">Name</span> your goal</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  placeholder={this.state.title}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoFocus={true}
                  autoCorrect="off"
                  spellCheck="false"
                />
              </span>
              <span className="field">
                <label htmlFor="motivation">What's your <span className="blue-highlight white">motivation</span> for this goal?</label>
                <input
                  type="text"
                  name="motivation"
                  value={this.state.motivation}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </span>
              <span className="field">
                <label htmlFor="plan">How do you <span className="blue-highlight white">plan</span> to achieve this goal?</label>
                <input
                  type="text"
                  name="plan"
                  value={this.state.plan}
                  onChange={this.handleChange}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
              </span>
              <input type="submit" className="submit" value="Submit" />
              <button
                className="submit cancel"
                onClick={() => {
                  close();
                }}
              >
                Cancel
            </button>
            </form>
          </div>
        )}
      </Popup>
    )
  }
}