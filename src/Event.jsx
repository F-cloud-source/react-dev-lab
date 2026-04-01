// Built Button and Programs in React.js 


function Event(){
     
    let Counter = 0;

    const CounterStart = () => console.log("Click me ")
     
    const CounterEnd = () => console.log("Click is over Click!!!")
    
return(
     
     <div>
            <button onClick={ Counter = () => CounterStart === 8 ? CounterStart : `${CounterEnd}`}>Counter is Start</button>
     </div>
    
)
    

};


export default Event;