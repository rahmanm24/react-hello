import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [employees, setEmployees] = useState(
    [
      {
        name: "Motiur", 
        role: "CEO", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Taz", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Motiur", 
        role: "CEO", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      },
      {
        name: "Taz", 
        role: "Manager", 
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      }
    ]
  )

  return (
    <div className="App">
        <div className='flex flex-wrap justify-center'>
          {employees.map((employee)=> {
            console.log(employee);
            return(
              <Employee
                name={employee.name}
                role = {employee.role}
                img = {employee.img}
              />
            );
          })}
        </div>
      
    </div>
  );
}

export default App;
