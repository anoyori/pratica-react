'use strict'

import React from 'react'

const Title = ({ name, lastName }) => (
  <h1>Olá {`${name}  ${lastName}!`}</h1>
)

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

/* const Title = React.createClass({
  getDefaultProps: function () { // Default: quando não é passada nenhuma propriedade, usa o default
    return {
      name: 'Desconhecido',
      lastName: 'Sem sobrenome'
    }
  },
  render: function () {
    return <h1>Olá {this.props.name + ' ' + this.props.lastName}!</h1>
  }
})
 */
export default Title
