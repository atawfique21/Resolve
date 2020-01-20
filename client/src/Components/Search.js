import React from 'react'

export default function Search(props) {
  return (
    <input
      type="text"
      name="username"
      onChange={props.handleChange}
      autoComplete="off"
      autoFocus={true}
      autoCorrect="off"
      spellCheck="false"
      placeholder="Search for a resolver..."
    />
  )
}