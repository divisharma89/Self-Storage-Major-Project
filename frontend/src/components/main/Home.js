import React from 'react'
import  '../main/Home.css'

const Home = (props) => {
  return (
      <div>
          <div className="banner-container">
              <div className="text-center">
                  <h1 className=" text-6xl text-orange-600 font-bold">Welcome to Self-Storage</h1>
                  <h4 className="text-4xl mt-8 text-white">Your very own personal self-storage corner</h4>
              </div>
          </div>
      </div>
  );
};
export default Home;