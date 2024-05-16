import React, {useState} from 'react';
import './login.css';
import Logo from './assets/Logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

    

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/api/doctor/login/', { email, password });
      console.log(response.data);
      navigate('/TodaysApp');
    } catch (error) {
      console.error('Login failed', error);
        alert("Invalid username or password"); 
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
        <center><h1>Login</h1></center> 
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
          <p className='box2'> Forgot Password?</p>
          <p className='SignUp'> Don't have an account?<Link to="/Dsignup"> <span style={{ color: 'red',fontWeight: 'bold' }}>Sign Up</span></Link></p>
          <center><button type="submit" style={{ borderRadius: '8px',width:'5rem', backgroundColor:'#2D84E6'}}>Log In</button></center>
        </form>
      </div>
    </div>
  );
}

export default Login;
