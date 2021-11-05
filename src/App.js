import { useEffect } from 'react'
import './App.css';

function App() {


  useEffect( () =>{
    fetch('http://localhost:3000/pirates')
    .then (response => response.json())
    .then(pirates => setPirates(pirates))
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
