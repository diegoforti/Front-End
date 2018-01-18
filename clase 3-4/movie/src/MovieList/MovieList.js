import React, { Component } from 'react'

import Movie from './Movie'

const styles = {
  buttonShow: {
    padding: '14px 40px',
    fontSize: 16,
    color: '#0693e3',
    backgroundColor: 'white'
  }
}

class MovieList extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  toggleClass = () => {
    const currentState = this.state.show
    this.setState({ show: !currentState })
  }

  render() {
    const { movies } = this.props
    const { show } = this.state

    return (
      <div>
        <button onClick={this.toggleClass} style={styles.buttonShow}>
          {show ? 'Ocultar Lista' : 'Mostrar Lista'}
        </button>

        {show ? (
          <ul>
            {movies.map(
              ({
                title,
                episode_id,
                opening_crawl,
                director,
                release_date
              }) => {
                return (
                  <Movie
                    key={episode_id}
                    title={title}
                    opening_crawl={opening_crawl}
                    director={director}
                    release_date={release_date}
                  />
                )
              }
            )}
          </ul>
        ) : null}
      </div>
    )
  }
}

export default MovieList
