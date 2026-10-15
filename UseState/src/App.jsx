import { useState } from 'react'

function App() {  
  const [num, setNum] = useState(0)
  const [name, setName] = useState({
    user: "Durjoy",
    age: 22
  })

  function increase(){
    setNum(num+1);
  }
  function decrease(){
    setNum(num-1);
  }

  const changeName = ()=> {
    const newName ={...name}
    newName.user = "Joy"
    setName(newName)
  }

  return (
    <div className="">
      <h1>{num}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>

      <h2>User Info</h2>
      <h3>{name.user}</h3>
      <h3>{name.age}</h3>
      <button onClick={changeName}>Change</button>
      
    </div>
  )
 
}

export default App
