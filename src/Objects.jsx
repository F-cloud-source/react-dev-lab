

import React, {useState} from 'react'

function Object(){

// intial state of React  Component Based Design 
// for Car Object(Including all Object details ) 
//  IT is based on prop  and ke based Design in 
// React.Js
// Use Object Rendering to built Car and UserName Components Design

    const [ car , setCar] = useState({ year: 2024,
                                       model: "Toyota Yaris",
                                       make: "Toyota",
                                       quality: "S-class",
                                       export : "German"        
                                     });
    
    const [userName , SetUsername] = useState({
                                    name: "Alex", 
                                    emailId: "alex123@gmail.com",
                                    MarriedStatus: "yes",
                                    });                       

  // Year Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HanldeYearChange(event){


    setCar( c => ({... c, year: event.target.value}));
};       


 // Make Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HanldeMakeChange(event){
     
    setCar( c => ({... c,  make: event.target.value}));
};


 // Model Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HanldeModelChange(event){
      
setCar( c => ({... c,  model: event.target.value}));  
                                     
};


 // Quality Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HanldeQualityChange(event){


    setCar( c => ({... c, quality: event.target.value}));
};       


 // Export Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HanldleExportChange(event){


    setCar( c => ({... c, export: event.target.value}));
};       

// Name Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HandleNameChange(event){
 
    SetUsername( c => ({... c , name: event.target.value}))

};

// EmailID Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.
function HandleEmailIDChange(event){
 
    SetUsername( c => ({... c , emailId: event.target.value}))

};

// Martial Status Onchange event After UI  renderings  Use Updater Fucntion for better quality and Performance.

function HandleMartialStatusChange(event){
 
    SetUsername( c => ({... c , arriedStatus: event.target.value}))

};


// UI rendering of Objectsv for Car  and UserData  Component based in React.Js
  return(
    <div>
        <h1>Your liking Car: {car.year} {car.make} {car.model} {car.quality}{car.export} </h1>
        <input type="number" value={car.year} onChange={HanldeYearChange}/>
        <input type="text"  value={car.make}  onChange={HanldeMakeChange}/>
        <input type="text"  value={car.model}  onChange={HanldeModelChange}/>
        <input type="text"  value={car.quality}  onChange={HanldeQualityChange}/>
        <input type="text"  value={car.export}  onChange={HanldleExportChange}/>
  
      <h1>User Info Details: {userName.name} {userName.emailId} {userName.MarriedStatus}</h1>
        <input type="text"  value={userName.name}  onChange={HandleNameChange}/>
        <input type="text"  value={userName.emailId}  onChange={HandleEmailIDChange}/>
        <input type="text"  value={userName.MarriedStatus}  onCgit hange={HandleMartialStatusChange}/>
       
    </div>
  )

};

export default Object;