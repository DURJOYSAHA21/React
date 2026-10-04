import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return(
    <div className="parent">
      <Card user='Aman Singh' age={18} title='Frontend Developer' img='https://images.unsplash.com/photo-1788259187559-39dddb75fa9c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8' />
      <Card user='Sarthak' age={28} title='Backend Developer' img='https://images.unsplash.com/photo-1752801516481-cfb8c47ee9a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <Card user='Aditya' age={24} title='Full Stack Developer' img='https://images.unsplash.com/photo-1751554933476-d029737d58b2?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </div>
  )
}

export default App
