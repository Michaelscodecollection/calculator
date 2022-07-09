import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
 
  const [userInput, setUserInput] = useState('')
  console.log(userInput.split(''))

  return (
    <div className="App">
   <h1>this is a calculator</h1>
   <input onChange={e => setUserInput(e.target.value)} />
    </div>
  );
}

export default App;
