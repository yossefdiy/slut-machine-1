import React,{useState}from 'react'
import './App.css' 
function Slot2(){
    const list=['♠','♥','♦','♣','♤','♡','♢','♧']
    const list1=['♠','♥','♦','♣','♤','♡','♢','♧']
    const list2=['♠','♥','♦','♣','♤','♡','♢','♧']


    const [toggle,setToggle]= useState(true)
    
    const [counter, setCounter] = useState(0);
if (!toggle)
    
    counter >= 0 && setTimeout(() => setCounter(counter + 1), 150)
    if (counter + 1) return(
    <div className='grid2'>
    <div  style={{color:'blue'}} className='slot' >
         {list[Math.floor(Math.random() *8)]}</div>
   <div style={{color:'red'}} className='slot' > {list1[Math.floor(Math.random() *8)]}</div>
  <div style={{color:'purple'}} className='slot'> {list2[Math.floor(Math.random() *8)]}</div>
      < button onClick={()=>setToggle(!toggle)}>spin</button>
      </div>
    )
  
}
export default Slot2