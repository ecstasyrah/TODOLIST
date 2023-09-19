import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import TodoThings from './Delete.jsx';
import './des.css'

function App() {
  const [toDo, setToDo] = useState([])
  const [newTD, setNewTD] = useState("")

  const addToDo = () => {
    if (newTD.trim() !== ""){
      const newReq = {
          id: Date.now(),
          text: newTD
      }
      setToDo([...toDo, newReq]);
      setNewTD("");
    }
  }

  const deleteToDo = (tdID) => {
    const updatedToDo = toDo.filter((td) => td.id !== tdID);
    setToDo(updatedToDo);
  };

  return (
    <div  className = "box">
        <div className = "title">
          <p>Open Say's laptop for:</p>
        </div>
        <input 
          type="text"
          placeholder="What to do?"
          value={newTD}
          onChange={(e) => setNewTD(e.target.value)}
          className="search"
        />
        <button className="button" onClick={addToDo}>GO!</button>
      <div>
        {toDo.map((td) => (
          <TodoThings 
            key={td.id} 
            td={td} 
            onDelete={deleteToDo} />
        ))}
      </div>
    </div>
  )
}

export default App
