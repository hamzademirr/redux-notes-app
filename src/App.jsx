import React from 'react'
import Serach from './components/Serach'
import NotesInput from './components/NotesInput'
import Notes from './components/Notes'
import Footer from './components/Footer'
import './App.scss'

function App() {
  return (
    <>
      <h1>Notes App</h1>
      <Serach />
      <NotesInput />
      <Notes />
      <Footer />
    </>
  )
}

export default App
