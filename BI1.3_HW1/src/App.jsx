import { useState } from 'react'
import BookByTitle from './components/BookByTitle'
import Books from './components/Books'
import BookByAuthor from './components/BookByAuthor'
import AddNewBook from './components/AddNewBook'

function App() {
  
  return (
    <>
      <AddNewBook/>
      <Books />
      <BookByTitle bookTitle="Shoe Dog" />
      <BookByAuthor author="Harper Lee"/>
    </>
  )
}

export default App
