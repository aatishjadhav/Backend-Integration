import { useState } from 'react'
import Movies from './components/Movies'
import MovieByTitle from './components/MovieByTitle'

function App() {
  
  return (
    <>
      <Movies />
      <MovieByTitle title="Gully Boy" />
    </>
  )
}

export default App
