

// Import React hook form Node modules

import React, {useState} from 'react'

// We gonna buikt 2 fucntion for adding and Removing Car Items
function CarUI(){

    const [cars , setCars] = useState([]);
    const [newyear , setNewYear] = useState(2025);
    const [newmodel , setNewModel] = useState("");
    const [newmake , setMake] = useState("");


function AddCarItem(){


    // Built Objects for make and model and newmake
     const NewCar = {
        year: newyear,
        make: newmake,
        model: newmodel
     }
// Make new State and Saving previous state to aviod conflict

     setCars(c => [...c, NewCar ]);
}

//function RemoveCarItem(index){

    
//}


function OnChangeYear(event){

   setNewYear(event.target.value);
}


function OnChangeMake(event){
  
    setMake(event.target.value);

}


function OnChangeModel(event){


 setNewModel(event.target.value)

}


return(

    <div>
        <h2>Update car Items</h2>
        <ul>
            {cars.map((cars , index) =>  
            <li key={index}>
                {cars.year}
                {cars.make}
                {cars.model}</li>)}
        </ul>
        
        
        <input placeholder="AddYear" value={newyear}
                              onChange={OnChangeYear}  type="text" /><br></br>
        <input  placeholder="AddMake" value={newmake} 
                             onChange={OnChangeMake}    type="text"  /><br></br>
        <input  placeholder="AddModel" value={newmodel}
                              onChange={OnChangeModel}   type="text"  /><br></br>
        <button  onClick={AddCarItem}>Add Items</button>
        

    </div>
)
}

export  default CarUI;