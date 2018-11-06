import React from 'react'

const Cocktail = (props) => {
  return (
    <li data-id={props.id} onClick={props.handleClick}>{props.name}</li>
  )
}

export default Cocktail
