import React, { Component } from 'react'

import Student from './Student'

class StudentList extends Component {
  constructor() {
    super()
    this.state = {
      showStudents: true
    }
  }

  toggleClass = () => {
    const currentState = this.state.showStudents
    this.setState({ showStudents: !currentState })
  }

  render() {
    const { studentsList } = this.props
    const { showStudents } = this.state

    return (
      <div>
        <button onClick={this.toggleClass}>
          {showStudents ? 'Ocultar Lista' : 'Mostrar Lista'}
        </button>

        {showStudents ? (
          <ul>
            {studentsList.map(({ lastName, firstName, dni }) => {
              return (
                <Student
                  key={dni}
                  dni={dni}
                  lastName={lastName}
                  firstName={firstName}
                />
              )
            })}
          </ul>
        ) : null}
      </div>
    )
  }
}

export default StudentList
