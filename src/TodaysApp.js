// import React from 'react';
// import Navbar from './Navbar.js';
// import './TodaysApp.css';
// import Profile1 from './profile.js';
// function TodaysApp() {
//     return (
//       <>
//       {/* <Navbar /> */}
//       <Profile1 />
//       <div className="profile-container">
//         <h1>Today's Appointment</h1>
//       </div>
//       </>
//     );
//   }
//   export default TodaysApp;

// import React from 'react';
// import Navbar from './Navbar.js';
// import './TodaysApp.css';
// import Profile1 from './profile.js';
// function TodaysApp() {
//     return (
//       <>
//       <Navbar />
//       <Profile1 />
//       <div className="profile-container">
//         <h1>Today's Appointment</h1>
//       </div>
//       </>
//     );
//   }
//   export default TodaysApp;


import React from 'react';
import Navbar from './Navbar.js';
import './TodaysApp.css';
import Profile1 from './profile.js';

function TodaysApp() {
  return (
    <>
      {/* <Navbar /> */}
      <Profile1 />
      <div className="profile-container">
        <h1>Today's Appointment</h1>
      <div className="additional-text">
        <div className="radio-container">
          <div className="radio-item">
            <div className='radio-but'>
            <input type="radio" id="radio1" name="name1" />
            </div>
            <label htmlFor="radio1">Name 1</label>
          </div>
          <div className="radio-item">
          <div className='radio-but'>
            <input type="radio" id="radio2" name="name1" />
            </div>
            <label htmlFor="radio2">Name 2</label>
          </div>
          <div className="radio-item">
          <div className='radio-but'>
            <input type="radio" id="radio2" name="name1" />
            </div>
            <label htmlFor="radio2">Name 2</label>
          </div>
          <div className="radio-item">
          <div className='radio-but'>
            <input type="radio" id="radio2" name="name1" />
            </div>
            <label htmlFor="radio2">Name 2</label>
          </div>
          {/* Add more radio buttons and names as needed */}
        </div>
      </div>
      </div>
    </>
  );
}

export default TodaysApp;