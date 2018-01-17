import React from 'react'

const styles = {
  personName: {
    fontSize: 19,
    listStyle: 'none',
    color: '#0693e3'
  }
}

function Student({ firstName, lastName, dni }) {
  return (
    <li style={styles.personName}>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <h3>{dni}</h3>
    </li>
  )
}

export default Student
