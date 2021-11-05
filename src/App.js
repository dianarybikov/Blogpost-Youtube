import { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [pirates, setPirates] = useState([])

  useEffect( () =>{
    fetch('http://localhost:3000/pirates')
    .then (response => response.json())
    .then(pirates => setPirates(pirates))
  })
  return (
    <div className="App">
      <PiratesContainer pirates={pirates}/>
    </div>
  );
}

export default App;
