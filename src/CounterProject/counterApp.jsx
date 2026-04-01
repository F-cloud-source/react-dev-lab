// built a counter App Project
          // Updater Function in React.js 
 //
// Use the current state to calculate the Next State.\
//  set Function do not trigger an update. 
//  React bathches together state updates for Performance Reasons.
//  Next state becomes the Current state after an update.





 import React, {useState} from 'react'

///import   './counter.css'

function Counter(){
  
 
    let [count , setCount] = useState(0)

    function  increment () {
      setCount(prev => prev + 1);
      setCount(prev => prev + 1)
      setCount(prev => prev + 1)
     };
     const decrement = () => setCount(prev => prev -1);
      const reset = () => setCount(0)

      return(
   <div>
     <button  className="btn" onClick={increment }>Start Counter:{count}</button>
        <button  className="btn" onClick={decrement}>Reverse Counter: {count}</button>
         <button  className="btn" onClick={reset}> Reset Counter:{count}</button>
          </div>
)
  
      
}



export default Counter;