// onChange = event handler used primarily form elements 
//            ex. <input> , <textarea> , <select>, <radio>
//            Triggers a function every time the value of the input changes

 import React, {useState} from 'react';


function MyUI(){
    
    // Built Component Use OnChange Event Handlers in react.Js with useState
    const [name , setName] = useState("User Name"); // Setting intial State
    const [quantity  , setQuantity] = useState("0"); // Setting intial State
    const [comment , setComment] = useState("Type Inbox"); // Setting intial State
    const [payment , setPayment] = useState("Visa"); // Setting intial State
    const [shipping , setShipping] = useState();


    function handleNameChange(event){

       setName(event.target.value);
     }

    function handleQuantityChange(event){

        setQuantity(event.target.value);
    }

    function handleCommentChange(event){

        setComment(event.target.value);
    }

    function handlePaymentChange(event){

        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input  value={name} onChange={handleNameChange}></input>
            <p>Name:{name}</p>

            <input value={quantity}  onChange={handleQuantityChange} type="number"></input>
            <p>Quantity : {quantity}</p>

            <input value={comment}  onChange={handleCommentChange}  placeholder="enter Delivery Instructions" ></input>
            <p>Quantity: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select An Option</option>
                <option value="Visa" >Visa</option>
                <option  value="Mastercard">Mastercard </option>
                <option  value="PayPak">PayPak</option>
            </select>

            <p>Payment:{payment}</p>


            <label>
                <input type="radio" value="Pick up " 
                checked={shipping === "Pick up"}
                onChange={handleShippingChange}/>
                Pick Up
            </label>
              <label>
                <input type="radio" value="Drop Down " checked={shipping === "Drop Down"}
                onChange={handleShippingChange}/>
                Drop Down
            </label>

            <p>Shipping:{shipping}</p>
        </div>
    )
}

export default MyUI;