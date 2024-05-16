import React,{useState} from 'react';
import axios from 'axios';
import './Dsign.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Dsign = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    experience: '',
    address: '',
    about: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const errors = {};
    // Check if fields are filled
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.age) {
      errors.age = 'Age is required';
    }
    if (!formData.qualification) {
      errors.qualification = 'Qualification is required';
    }  
    if (!formData.experience) {
      errors.experience = 'Experience is required';
    }
    if (!formData.about) {
      errors.about = 'About is required';
    } else if (formData.about.length < 50) {
      errors.about = 'About must be at least 50 characters';
    }
    if (!formData.address) { // Corrected validation for address
      errors.address = 'Address is required';
    }
  
    if (Object.keys(errors).length === 0) { 
      try {
        const response = await axios.post('http://localhost:5000/api/drInfo/signup/', formData);
        console.log(response.data); 
      } catch (error) {
        console.error('Form submission failed', error);  
      }
      // Reset form data
      setFormData({
        name: '',
        age: '',
        qualification: '',
        experience: '',
        address: '',
        about: '',
      });
    } else {
      // Set errors
      setErrors(errors);
    }
  };

  return (
    <div>
      <p className='text1'>Doctor Details</p>
      <div className='DSup'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            {errors.name && <p>{errors.name}</p>} 
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <p>{errors.age}</p>}
          </div>
          <div>
            <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
          {errors.qualification && <p>{errors.qualification}</p>}
          </div>
          <div>
            <label htmlFor="experience">Experience (yrs):</label>
            <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
          {errors.experience && <p>{errors.experience}</p>}
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p>{errors.address}</p>}
          </div>
          <div>
            <label htmlFor="about">About:</label>
            <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
          />
          {errors.about && <p>{errors.about}</p>}
          </div>
          <button type="submit"><Link to="/TodaysApp">Submit</Link></button>
        </form>
      </div>

    </div>
  );
};

export default Dsign;
