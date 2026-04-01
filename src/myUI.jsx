// React Hooks = Special fucntion allows functional components to use react features without
//  writing classes component(React v16.8)
//               (use state , useEffect , UseContext , useReducer , useCallback , and more .....)


// useState = A React hook that allows the creation of a statefull variable and
//             A setter fuction to update it value in the virtualDOM [name , setter]

// Acess the useSate hook of React library use destructring No need to import all library

import React, {useState} from 'react'
    
function Hooks(){

    let [name , setName] = useState("Guest"); // intial state is Guest before re-render

     let updateName = () => {
        setName("Sara")
    } 


   let [oldAge , setOldAge] = useState(30);  // intial state is 30 before re-render

   let  aboveAge = () => {

   setOldAge( next => (next < 50 ? next +1 : next) ) 
   }
   
   let [newAge , setNewAge] = useState(30);  // intial state is 30 before re-render

   let belowAge = () => {

    setNewAge(prev => (prev > 0 ? prev -1 : prev))
   }

    
return(
    <div>
        <h1 className="name-1">Name of User:{name}</h1>
        <button onClick={updateName}>Update User Name</button>
       
        <h1 className="name-1">Old Age of User :{oldAge}</h1>
        <button onClick={aboveAge}>Increase Age</button>

        <h1 className="name-1">New Age of User:{newAge}</h1>
        <button onClick={belowAge}>Decrease Age</button>
        
    </div>
)
        
}


export default Hooks;