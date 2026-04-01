
import React, {useState} from 'react'
import  './colorApp.css'
// use black as base color and Change UI
//  color Using onChangecolor  react hook and use inline css for all Project to dislplay color on UI 
function ColorPicker(){
 
  let [color , setColor] = useState("#eeff00ff")
      

  function Changecolor(event){
     
   setColor(event.target.value);
  }
  return(
    <div className="User-1">
        <h1 className="h-1" style={{color:color}}>Color:{color}</h1>


        <div className="User-2" style={{backgroundColor:color}} >

        </div>
        <label>

             <input type="color" value={color} onChange={Changecolor} arial-label="pick a color" />
        </label>
        
   
        
    </div>
  )


}


export default ColorPicker;