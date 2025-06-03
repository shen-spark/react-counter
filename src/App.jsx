import React, { useState } from 'react'
import "./App.css"
const App = () => {

  //  theme funtions 

  const [theme , setTheme] = useState("light");


  const lighttheme = () => {
    console.log("light theme");
    setTheme("light");
  }

   const darktheme = () => {
    console.log("dark theme");
    setTheme("dark");
  }



  // counter functions 
  

      const [count,setCount] = useState(0);

       // increase 

       const increase = () => {
        setCount(count +1);
       }

      //  decrease

       const decrease = () => {
        setCount(count - 1);
       }

      //  reset

      const reset = () => {
        setCount(0);
      }



  return (



    <div className={`theme ${theme}`}>


       <div className="toggle-theme-button">
         <button id='dark' onClick={darktheme} className={`btn-dark ${theme}`}>Dark</button>
        <button id='light' onClick={lighttheme} className={`btn-light ${theme}`}>Light</button>
       </div>

      <div className={`container ${theme}`}>
        <div className="timer-container">
      <h2>Count : {count} </h2>
      </div>

      <div className={`btn-container ${theme}`}>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
       


      </div>
    </div>

    </div>
  )
}

export default App