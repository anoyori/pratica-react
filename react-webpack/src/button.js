'use strict'

import React from 'react'

const Button = ({ children, handleCLick }) => (
  <button className='main-button' onClick={handleCLick}>
    {children}
  </button>
)

Button.protoTypes = {
  handleClick: React.PropTypes.func.isRequired
}

export default Button
