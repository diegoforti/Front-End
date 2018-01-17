import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import StudentList from './StudentsList'

var studentsList = [
  { firstName: 'Adrián', lastName: 'Ferré', dni: 54353353 },
  { firstName: 'Mateo', lastName: 'Molina', dni: 54533343 },
  { firstName: 'Maria', lastName: 'Fernandez', dni: 54353512 },
  { firstName: 'Diego', lastName: 'Forti', dni: 54533843 },
  { firstName: 'Agustín', lastName: 'Quevedo', dni: 54357512 }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <StudentList studentsList={studentsList} />
      </div>
    )
  }
}

export default App
