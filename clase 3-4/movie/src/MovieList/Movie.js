import React from 'react'

const styles = {
  movieStyle: {
    fontSize: 19,
    listStyle: 'none',
    color: '#0693e3'
  }
}

function Movie({ title, episode_id, opening_crawl, director, release_date }) {
  return (
    <li style={styles.movieStyle}>
      <h1>{title}</h1>
      <h3>{opening_crawl}</h3>
      <h3>{director}</h3>
      <h4>{release_date}</h4>
    </li>
  )
}

export default Movie
