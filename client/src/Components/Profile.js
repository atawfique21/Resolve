import React from 'react';

export default function Profile(props) {
  const user = props.users.find(user => {
    console.log(user)
    return user.id === parseInt(props.userId)
  })

  return (
    <div>
      {user && (
        <div className="profile">
          <img src={user.profile_pic_url} alt="profile"></img>

          <div className="names">
            <h1>{user.first_name} {user.last_name}</h1>
            <h3>{user.fun_fact}</h3>
          </div>

          <div className="location">
            <img className="pinpoint" src={props.pinpoint} alt="map"></img>
            <h4>{user.location}</h4>
          </div>
        </div >
      )}
    </div>
  )
}