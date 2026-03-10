
// Project Outline 
// Array data User Data As Object and intial state 
// Making new State function and Add task and Delete Task 
// Making Handle input bar for adding and atagrt new Task vlaue on UI 
// Making  button for ADd task and  delete task 

// Import useState Hook from react bundle

import React, {useState} from 'react'

// Buildng All Features

function TodoApp(){

// Building Intial Array for User Daily Chores

const [useractivity ,  setUserActivity] = useState([{ id:1 , Chores: "I am cooking food "},
                                                    {id:2 , Chores: "I am feeding my dog"},
                                                    {id:3 , Chores: "I am doing exercise"},
                                                    {id:4 , Chores: "I am reading Novel on History"},
                                                    {id:5 , Chores: "I am Taking Shower"}
                                                    ]);
// New State 
const [newactivity , setNewActivity] = useState("");


function HandleUserInput(event){


setNewActivity(event.target.value);
}


function AddActivity(){

 if(newactivity.trim()  === "") return;

 // For live Task Update
  const NewTodo= {
    Chores: newactivity,
    text: newactivity,
  }

setUserActivity([...useractivity, NewTodo]);

 }

function DeleteActivity(Chores){

  setUserActivity(useractivity.filter(task => task.Chores !== Chores));

}

return(
  <div className="To-Do-App"> 
    <h1  className="Header">User Activity App</h1>

    <input className="input-1" 
     type="text"
       placeholder="Add User Activity" 
       value={newactivity}
       onChange={HandleUserInput}/>
    <button  className="Btn-1"  onClick={AddActivity}>Add Activity</button>

    <ul className="ul-1">
      {useractivity.map((task)  => 
      <li key={task.id}>{task.Chores}
      <button onClick={DeleteActivity}>Delete Activity</button></li>
      )}

    </ul>

  
  </div>
)



}





export default TodoApp;

