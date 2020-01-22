import React from 'react'
import Popup from 'reactjs-popup'


export default class AddGoal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      emoji: "",
      title: "",
      motivation: "",
      plan: "",
      errorText: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    this.props.handleAdd(e, { name: this.state.title, motivation: this.state.motivation, plan: this.state.plan })
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
      <Popup trigger={<button className="submit"> Add a new Goal </button>} modal>
        {close => (
          <div className="modal">
            <a className="close" onClick={close}><h5>X</h5></a>
            <div className="header"> Create a Goal </div>
            <form onSubmit={(e) => { this.handleSubmit(e); close(); }}>
              {this.errorText && <p className="error-text">{this.errorText}</p>}
              <span className="field">
                <label htmlFor="Title"><span className="blue-highlight white">Name</span> your goal</label>
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
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