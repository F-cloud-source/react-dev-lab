
import { useState} from 'react';


export default function SearchBar(){

    const [searchItem, setSearchTerm] = useState('');

   
  
return (
    <div>

     <input  type="text"
       placeholder="Search for Products" 
       value={searchItem}
       onChange={(e) => setSearchTerm(e.target.value)}/>
 
    </div>
)
}