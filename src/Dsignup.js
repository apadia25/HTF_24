import React, {useState} from 'react';
import './login.css';
import Logo from './assets/Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function DoctorSign() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      
      // Validate email and password
      const errors = {};
      if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Email id should be in the form abc@abc.abc")
      }  
      if (password.length < 6) {
        alert('Password must be at least 6 characters long');
      }
  
      if (Object.keys(errors).length > 0) {
        setErrors(errors);
        return;
      }
  
      try {
        const response = await axios.post('http://localhost:5000/api/doctor/signup/', { email, password });
        console.log(response.data);
        navigate('/Dsign');
      } catch (error) {  
        console.error('Login failed', error);  
      } 
    };

  return (
    <div className="container">
      <div className="box"> 
        <div className='grid'>
        <div className="logo">
            <img className="LOGO" src={Logo} alt="Logo" />
          </div>
        <center><p className='Welcome'>Welcome!</p></center> 
        </div>
      </div>
      
      <div className="box">
        <div className='box1'>
        <center><h1>Sign Up</h1></center> 
        </div>
        <br></br> 
        <form onSubmit={handleSubmit}>
          <center>
          <input
          type="email" 
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          style={{ borderRadius: '10px', marginBottom: '10px' }}
          required
        />
        <input
          type="password"
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
          style={{ borderRadius: '10px', marginBottom: '10px' }}
          required
        /> 
          </center>
          <p className='SignUp'> Already have an account?<Link to="/Dlogin"> <span style={{ color: 'red',fontWeight: 'bold' }}>Log In</span></Link></p>
          <center><button type="submit" style={{ borderRadius: '8px',width:'5rem', backgroundColor:'#2D84E6'}}>Sign Up</button></center>
        </form>
      </div>
    </div>
  );
}

export default DoctorSign;
