// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './ButtonContainer.css';

const RealHome = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
      navigate(path);
    };
    const redirectToExternal = (url) => {
      window.location.href = url;
    };

  return (
    <div className="home-container">
      <h1 style={{
        color:"white"
      }}>Design and analysis of Algorithms</h1>
      <h1 style={{color:"yellow"}}>Amortized analysis on stack</h1>
      <div className="button-container">
        <button onClick={() => redirectToExternal('https://vijinimallawaarachchi.com/2017/05/06/amortized-analysis-a-basic-introduction/')}>Info</button>
        <button onClick={() => navigateTo('/visualize')}>Visualization</button>
        <button onClick={() => navigateTo('/')}>Quiz</button>
      </div>
    </div>
  );
};

export default RealHome;
