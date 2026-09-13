  import { useState } from 'react';

  
  export default function MyInput(){
    
    const [mydata , setMyData] = useState('');
    


    const handleSave = () => {
        console.log("Button is alive");
    }
    
    

  

    const handledelete = () => {
        
       
    
    }

   const handleEdit = () => {


   }

   const handleUpdate = () => {


   }
    return(

      
 <form>

 <input type= "text" placeholder="add user items" value={mydata} onChange={(e: React.ChangeEvent<HTMLInputElement>)  => setMyData(e.target.value)}>
 
 </input>

 <button onClick={handleSave}>Add Data</button>
 <button onClick={handledelete}>Delete Data</button>
 <button  onClick={handleEdit}>Edit Data</button>
 <button  onClick={handleUpdate}> Data</button>
    
 </form>
      
    )

  }