
import React from 'react';
import Navbar from './Navbar.js';
import './TodaysApp.css';
import Profile1 from './profile.js';
import  { useEffect , useState} from 'react';
import axios from 'axios';

function TodaysApp() {
  const [patients , setPatients] = useState([])
  const [count,setCount]=useState(0);
  useEffect(()=>{
    fetch("http://localhost:5000/").then(console.log)
    axios.get('http://localhost:5000/getPatientInfo/') 
  .then(response => {
    console.log(response.data); 
    setPatients(response.data); 
  }) 
  .catch(error => {
    console.error('Error fetching patient data:', error); 
  });
  },[])

  const handleCheckboxChange = index => {
    setPatients(prevPatients => {
      const newPatients = [...prevPatients];
      newPatients.splice(index, 1);
      setCount(count+1);
      console.log(count);
      return newPatients;
    });
  }; 

  return (
    <>
         {/* <Navbar /> */}
      <div>
      <Profile1 />
          <div className='list'>
          <h1>Today's Appointment</h1>
        <table className='table'>
          <thead>
            <tr>
              <th></th> 
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient.id}>
                <td>{index + 1}</td>
                <td>{patient.name}</td>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => handleCheckboxChange(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          </div>
        
      </div>
    </>

  );
}

export default TodaysApp;