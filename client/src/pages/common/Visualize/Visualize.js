import React, { useState, useEffect } from 'react';
import './Visualize.css';
import amor1Image from './amor1.jpg'; 



const Visualize = () => {
  const [stack, setStack] = useState([]);
  const [totalAmortizedCost, setTotalAmortizedCost] = useState(0);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [amortizedCost, setAmortizedCost] = useState(0);
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [beforeValue, setBeforeValue] = useState(0);
  const [afterValue, setAfterValue] = useState(0);
  const [animationClass, setAnimationClass] = useState('');
  const [temp, setTemp] = useState('');


  useEffect(() => {
    const handleDOMContentLoaded = () => {
      // Any additional setup can go here
    };
    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, []);
  
  

  const toggleInputField = () => {
    setInputVisible(!inputVisible);
  };

  const updateTotalAmortizedCost = (cost) => {
    setTotalAmortizedCost((prevCost) => prevCost + cost);
  };

  const push = () => {
    const newStack = [...stack];
    newStack.unshift(inputValue);

    const x = newStack.length - 1;
    const y = x + 1;
    const amortizedCost = calculatePushAmortizedCost(x, y);

    setBeforeValue(x);
    setAfterValue(y);
    setAnimationClass('show-animation');
    setTemp('temp');
    setXValue(x);
    setYValue(y);
    
    setTimeout(() => {
      setStack(newStack);
      setAmortizedCost(amortizedCost);
      updateTotalAmortizedCost(amortizedCost);
    //   setXValue(x);
    //   setYValue(y);
      setResultValue(amortizedCost);
      setInputValue('');
      setInputVisible(false);
      setAnimationClass('');
      setTemp('');
    }, 2500);
  };

  const pop = () => {
    const newStack = [...stack];
    const x = newStack.length - 1;
    const y = Math.max(0, x - 1);

    setBeforeValue(x);
    setAfterValue(y);
    setAnimationClass('show-animation');
      setTemp('temp');
    
    setTimeout(() => {
      if (newStack.length > 0) {
        newStack.shift();
        const amortizedCost = calculatePopAmortizedCost(x, y);
        setAmortizedCost(amortizedCost);
        updateTotalAmortizedCost(amortizedCost);
      }
      setStack(newStack);
      setXValue(x);
      setYValue(y);
      setResultValue(amortizedCost);
      setAnimationClass('');
      setTemp('');
    }, 2500);
  };

  const calculatePushAmortizedCost = (x, y) => {
    return x === 0 ? 2 : 1 + y - x;
  };

  const calculatePopAmortizedCost = (x, y) => {
    return x > 0 ? 1 + y - x : 0;
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="buttons" style={{
          margin: 'auto',
          marginBottom:30,
          width:152,
          display: 'flex'
        }}>
          <button id='vijeth' onClick={toggleInputField} style={
            {
              marginRight: 4,
            }
          }>Push</button>
          {inputVisible && (
            <>
              <input style={{
                width:100
              }}
                type="text"
                id="inputField"
                placeholder="Enter"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <br />
              <button onClick={push} id="confirmPush" style={{
                padding:0,
                fontSize:10,
                height:100
              }}>
                Confirm Push
              </button>
            </>
          )}
          <button onClick={pop}>Pop</button>
        </div>
        <div className="stack-container" id="stack-container">
          {stack.map((item, index) => (
            <div key={index} className="stack-item push-animation">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="right-side">
        <h2 style={{
          color:'white'
        }}>Amortized Cost Calculation</h2>
        <div className = {`enlarge ${temp}`} id="formula-values">
          <p>
            Φ(hi) = <span id="y-value">{yValue}</span>, Φ(hi-1) = <span id="x-value">{xValue}</span>,
            Result = <span id="result-value">{resultValue}</span>
          </p>
        </div>
        <p>
          where, <br /> Φ(hi) Number of elements after operation
        </p>
        <p>Φ(hi-1) Number of elements before operation</p>
        <img src={amor1Image} alt="Description of your image" />
        <p>
          where, <br /> Φ(h) is potential function
        </p>
        <p> Ci is actual cost of the operation</p>
        <div id="amortized-cost">Amortized Cost: {amortizedCost}</div>
        <br />
        <div id="total-amortized-cost">Total Amortized Cost: {totalAmortizedCost}</div>
        <div className={`animation-container ${animationClass}`}>
          <p>Number of elements before operation: {beforeValue}</p>
          <p>Number of elements after operation: {afterValue}</p>
          <p>Amortized Cost: {resultValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Visualize;