'use strict'

import React, { useEffect, useState } from 'react'

export default function Counter () {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = counter
  }, [counter])

  return (
    <div>
      <h1>{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
      >Adicionar
      </button>
    </div>
  )
}

