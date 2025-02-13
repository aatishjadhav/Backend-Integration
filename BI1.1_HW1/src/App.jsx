import { useState } from 'react'
import BookByTitle from './components/BookByTitle'
import Books from './components/Books'
import BookByAuthor from './components/BookByAuthor'

function App() {
  
  return (
    <>
      <Books />
      <BookByTitle bookTitle="Shoe Dog" />
      <BookByAuthor author="Harper Lee"/>
    </>
  )
}

export default App
