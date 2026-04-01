

// import PropsTypes from './prop-types'
function ListItem(){

    const fruits = [
  { id: 1, name: "Apple", color: "Red", calories: 95 },
  { id: 2, name: "Banana", color: "Yellow", calories: 105 },
  { id: 3, name: "Grapes", color: "Purple", calories: 62 },
  { id: 4, name: "Orange", color: "Orange", calories: 62 }
];

 //const SortedFruitHigh = fruits.sort((a , b ) => (b.calories) - (a.calories))

 const SortedFruitHigh = fruits.sort((a , b ) => (a.calories) - (b.calories))

return(
     <ul>

        {SortedFruitHigh.map((foodItem) =>
        <li key={foodItem.id} >

            {foodItem.name} - {foodItem.color} - {foodItem.calories}  
        </li>)}
     </ul>
)


};


export default ListItem;