'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleCLick={() => alert('search')}>
    Search
  </Button>
)

export default SearchButton
