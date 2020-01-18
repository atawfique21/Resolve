import React from 'react'
import Popup from 'reactjs-popup'


export default function AddGoal() {
  return (
    <Popup trigger={<button className="submit"> Create a Goal </button>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}><h5>X</h5></a>
          <div className="header"> Create a Goal </div>
          <div className="content">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
            Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
            delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
      <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
            commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
            explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
    </div>
          <div className="actions">
            <button
              className="submit"
              onClick={() => {
                close();
              }}
            >
              Submit
            </button>
            <button
              className="submit cancel"
              onClick={() => {
                close();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}