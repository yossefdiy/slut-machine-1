import React from 'react'
import Slot from './slot'
import Slot2 from './slot2'
import Slot3 from './slot3'
import './App.css'

export default function App() {
  return (
    
    <div className='app'>
        <div>slot machina***</div>
        <div className='grid'>
        <button><Slot/></button>
        <button><Slot2/></button>
        <button><Slot3/></button>
       
       
        </div>
        
        
        
     
    </div>
    
  )
}
