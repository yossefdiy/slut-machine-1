import React from 'react'
import { useSpring, animated} from 'react-spring'
import Slot from './slot'
import Slot2 from './slot'
import Slot3 from './slot'
import './App.css'

export default function App() {
  return (
    
    <div className='app'>
        <div>slot machina***</div>
        <div className='grid'>
        <div><Slot/></div>
        <div><Slot3/></div>
        <div><Slot2/></div>
       
       
        </div>
        
        
        
     
    </div>
    
  )
}
