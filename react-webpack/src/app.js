'use strict'

import React, { Component } from 'react'
import SearchButton from './search-button'
import LikeButton from './like-button'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <SearchButton />
        <LikeButton />
      </div>
    )
  }
}

export default App
