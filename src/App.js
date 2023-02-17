import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {

  const [role, setRole] = useState('Employee');

  return (
    <div className="App">
      <input 
        type="text"
        onChange={(e)=> {
          console.log(e.target.value);
          setRole(e.target.value);
        }} />
      <Employee name="Nabil" role="Boss"/>
      <Employee name="Taz" role={role}/>
    </div>
  );
}

export default App;
