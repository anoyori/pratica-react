'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleCLick={() => alert('like')}>Like</Button>
)

export default LikeButton
