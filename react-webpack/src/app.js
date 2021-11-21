'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor Inicial'
    }
  }

  render () {
    return (
      <div>
        <form>
          <input type='text' defaultValue={this.state.value} onChange={(e) => {
            console.log(e)
            this.setState({ value: e.target.value })
          }}
          />
        </form>
      </div>
    )
  }
}

export default App
