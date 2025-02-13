import { useState } from 'react'
import Movies from './components/Movies'
import MovieByTitle from './components/MovieByTitle'
import AddMovieForm from './components/AddMovieForm'

function App() {
  
  return (
    <>
      <AddMovieForm/>
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </>
  )
}

export default App
