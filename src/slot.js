import React,{useState} from "react"
import {animated,useTransition} from 'react-spring'


 export default   function Slot() {
  const list1=['😐', '😑' ,'😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱']
  const [toggle1, set1] = useState(false)
  const transitions = useTransition(toggle1, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1},
    reverse: toggle1,
  
    
  
    onRest: () => set1(!toggle1),
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