interface LedgerbuttonProps {
    onClick:(event: React.MouseEvent<HTMLButtonElement>) => void;
}



 export const   Ledgerbutton = ({onClick }: LedgerbuttonProps)  => {
    return (

   <div className="Div1">   

           <button onClick={onClick}    className="Btn1">  Add Buyers</button>

           <button onClick={onClick}   className="Btn2">  Delete Buyers</button>

           <button onClick={onClick}   className="Btn3"> Update Data </button>

   </div>
    
           

            
    );
}