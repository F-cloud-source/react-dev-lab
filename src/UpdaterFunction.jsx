
// Updater Function = a function passed as an argument tp useState() usually ex .setYear(year + 1 )
//                    Allow for safe updates based on the previous state 
//                    Used with multiple state Updates and asynchronous Fuctions
//                    Good practice to use Updater functions.


import React, {useState} from 'react'



function UpdaterApp(){


          // Uses the current state to calculate to calculate Next state 
          // Set fucntions do not trigger an updates 
         // React batches together state updates for performance reasons 
        // NEXT state become the CURRENT state after an update
   
let [count , setCount] = useState(0);
      function Increment(){
// Practical use of Updater function in React.Js to aviod immunability and aviod similar
//  key word conflicts that effect Performance issues in UI and User Load.
//  take a pending state to calcutate NEXT state.
//  React puts your updater function in a quene (waiting in line )
//  During the enxt render, it will them in the same order 

// Before setCount(increase + 1) it is inconsistent and cause issue instated sue updater function.
        setCount(I => I + 1 );
        setCount(I => I + 1 )
        setCount(I => I + 1 )
        setCount(I => I + 1 )

      }
    
      function Decrement(){
   
        setCount(D => D -  1);
        setCount(D => D -  1);
        setCount(D => D -  1);
        setCount(D => D -  1);

      }

      function Reset(){

        setCount(0);
      }
    
      return(

        <div>
            <button className="BTN1" onClick={Increment}> Increment NO:{count} </button>
            <button className="BTN2" onClick={Decrement}>Decrement No: {count}  </button>
            <button className="BTN3" onClick={Reset}>  Reset NO: {count} </button>
        </div>
      )


}

export default UpdaterApp;
