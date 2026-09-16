import  React, {useState  } from 'react';

const [submit, setSubmit] = useState<string>('');


const HandleInputChange = (event: ChangeEvent<HTMLInputElement>)  => {
    setSubmit(event.target.value);
}


const handleButtonClick = (event: ChangeEvent<HTMLInputElement> => {
 event.preventdefault();
});
export function DataSubmit(){

    <div>
        <input placeholder="Add Specfic Data for product items" 
        type="text"
        value={HandleInputChange}>
        </input>

        <button onClick={handleButtonClick}> Add Specific Data in Form</button>
    </div>
}
