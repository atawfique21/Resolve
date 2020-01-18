import React from 'react';

export default function Profile(props) {
  const user = props.users.find(user => {
    return user.id === parseInt(props.userId)
  })

  const goals = props.goals.filter(goal => {
    console.log(goal)
    return goal.user_id === parseInt(props.userId)
  })

  return (
    <div>
      {user && (
        <div className="profile">
          <img src={user.profile_pic_url} alt="profile" class="profile-image"></img>

          <section className="names">
            <h1>{user.first_name} {user.last_name}</h1>
            <h3>{user.fun_fact}</h3>
          </section>

          <section className="location">
            <img className="pinpoint" src={props.pinpoint} alt="map"></img>
            <h4>{user.location}</h4>
          </section>
          <section className="goals">
            <h3>Goals</h3>
            {goals.map(goal => (
              <div className="single-goal" key={goal.id}>
                <h4>{goal.name}</h4>
                <h5>Motivation</h5>
                <p>>{goal.motivation}</p>
                <h5>Plan</h5>
                <p>>{goal.plan}</p>
              </div>
            ))}
          </section>
        </div >
      )}
    </div>
  )
}