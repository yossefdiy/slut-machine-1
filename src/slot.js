import React,{useState} from "react"
import {animated,config,useTransition} from 'react-spring'
const list=['😐', '😑' ,'😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱']


 export default   function Slot() {
  const [list1,setwin ]=useState(['😐', '😑' ,'😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱'])
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1},
    reverse: toggle,
  
    
  
    onRest: () => set(!toggle),
  })


   
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.4, 1.0], output: [0, 1] }),
          fontSize:'50px'
        }}>
       {list1[Math.floor(Math.random() *10)]}

      </animated.div>
    ) : '🦥'
    
    
  )
  
  
}