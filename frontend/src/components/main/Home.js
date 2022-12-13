//1. components are simple javascript function
//2. funtion name should always start with upper case letter
//3. function should always return single JSX element
//4. function should be exported 
import React from 'react';
import './Home.css';
import logo from '../logo.svg';



const Home = () => {
  return (
    <div>
      <div>
        <h1 className="head1" style={{ color: 'red', background: 'yellow' }}>My Home Component</h1>
        <hr />
        <button type="button" className="btn btn-primary">Bootstrap</button>
        <img src={logo} />

      </div>
      <div>
        
      </div>
    </div>
  )

}

export default Home;
