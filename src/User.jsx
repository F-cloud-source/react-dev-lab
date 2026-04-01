// User Css import

function User(props){

        if(props.islogIn){
           return(
            <div>
                <h1>This User Data is Verified : {props.islogIn} Login In System</h1>
                <h1>The User Name is : {props.userName}</h1>
                <h2>The {props.userName} emailAdrress is{ props.emailValid}</h2>

           </div>
                
           )
        }
        else{
        
            return(
                 
               <div >
                <h1>This User Data is Failed Acess System : {props.failInput} Login Fail System</h1>
                <h1>The User Name is : {props.emptyName}</h1>
                <h2>The {props.emptyName} emailAdrress {props.emptyEmail}</h2>
           </div>  
            )       
         }
      
}

export default User;