
// Import useState hook form react packs

import React, {useState} from 'react'

function ItemUpdater(){

 const [cars , setCars] = useState(["Spare Tire" , "Jack" , "Lug Wrench" , "First Aid Kit" , "Inflator" , "Ice Scraper " ])

 // Building  add item feature it add onky value as string  and add on UI
 function addCar(){

    const additem = document.getElementById("newitem").value;


// Reset Previous item if i lick it auot remove and on refrsh it appear as 
// previous state on UI as rendering
     document.getElementById("newitem").value = ("");

    setCars( c => [...c , additem]);
  
 }

// We use i to difference from index not conflict
 function removeCar(index){

    setCars(cars.filter((element,  i) => i !== index))
 
 }
   return(
    <div>

        <h2>These are Car  Items</h2>
        <ul>
            {cars.map((car , index) =>
                            <li key={index} onClick={() => removeCar(index)}>{car}
            </li>)}
        </ul>

        <input className="input1"   type="text"   id="newitem"  placeholder="add car item"/><br></br><br></br>
        
        <button  className="Btn1"  onClick={addCar}>Add Item for Car</button>
    </div>

   )


}

export  default ItemUpdater;