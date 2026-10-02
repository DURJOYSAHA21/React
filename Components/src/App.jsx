import { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
       {Card()}
       {Card()}
       {Card()}
       <Navbar />
    </div>
     
    
  )
  
  
}

export default App
