


import { LedgerButton }  from './Action_Button';
import NavigationBar  from './nav';
import SearchSystem from './Search_System'
import './App.css';
  


export  default function App(){

    return(
       

        <>
        <NavigationBar></NavigationBar>
         <LedgerButton onClick={() => console.log('Clicked')} ></LedgerButton>
         <SearchSystem></SearchSystem>
        </>
        
    )
}