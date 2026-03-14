
// Project Outline 
// Array data User Data As Object and intial state 
// Making new State function and Add task and Delete Task 
// Making Handle input bar for adding and delete new Task value on UI 
// Making  button for ADd task and  delete task 
// Refactor Project
// Fix Double id and key issue 
// Built delete Feature Function 
// Add local Storage So On rendering IT not disappear all UI new task of User ON UI 
// Improve Box model for better Responsive Design and Adaptability

// Import useState Hook from react bundle

import React, {useState} from 'react'

// Buildng All Features

function TodoApp(){

// Building Intial Array for User Daily Chores

const IntialTask = [ 

            { id:1 , Chores: "I am cooking food "},
            {id:2 , Chores: "I am feeding my dog"},
            {id:3 , Chores: "I am doing exercise"},
            {id:4 , Chores: "I am reading Novel on History"},
            {id:5 , Chores: "I am Taking Shower"}
]
const [useractivity ,  setUserActivity] = useState(IntialTask);
// New State Hook of User Activity App
const [newactivity , setNewActivity] = useState("");


function HandleUserInput(event){

setNewActivity(event.target.value);
}


function AddActivity(){

 if(newactivity.trim()  === "") return;

 // For live Task Update
  const NewTask =  {
   id: crypto.randomUUID(),
    Chores: newactivity
  }

setUserActivity([...useractivity, NewTask]);

 }

function DeleteActivity(id){

  setUserActivity(useractivity.filter(task => task.id !== id));

}

return(
  
  < main className=" flex  min-h-screen w-full justify-center  bg-slate-50 py-10 px-4  items-start sm:items-center">

  <div className="w-full max-w-md mx-full bg-white shadow-yellow-500/5 backgrop-blur-md  rounded-3xl shadow-2xl  flex flex-col gap-6 p-6">  
  


    <div className="h1-holder-div w-full mb-4">


     <h1 className=" text-3xl font-black text-black tracking-tighter">User Activity App</h1>

 </div>
 
<div className="flex flex-col gap-3"> 

<input  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all"
                type="text"
                placeholder="Add User Activity" 
                value={newactivity}
                onChange={HandleUserInput}/>

    <button  className="w-full bg-amber-400 hover:bg-amber-300 text-black font-bold py-3 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95"  onClick={AddActivity}>Add Activity</button>

</div>
    
      <div className=" mt-4 border-t pt-6 space-y-3">

  <ul className="mt-4 space-y-3  border-t border-slate-100 pt-6">
           {useractivity.map((task  => 
           <li key={task.id}>{task.Chores}
           <button className="w-full  bg-amber-400  hover:bg-amber-300 text-black font-bold py-3 rounded-2xl shadow-lg shadow-indigo-200 transition-all active:scale-95"  onClick={() => DeleteActivity(task.id)}>Delete Activity</button>
           </li>
      ))}

    </ul>
        </div>

     </div>
  </main>
  
)



}





export default TodoApp;
