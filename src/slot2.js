import React,{useState} from "react"
import {animated,useTransition} from 'react-spring';


 function Slot2() {
  const list2 =['j', '😑' ,'😬', '🙄', '😯', '😦', '😧', '😮', '😲', '🥱']
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, {
    from: { position: 'center', opacity: 0},
    enter: { opacity: 1 },
    leave: { opacity: 1},
    reverse: toggle,
    
  
    onRest: () => set(!toggle),
  })

   
  return transitions(({ opacity }, item) =>
    item ? (
      <animated.button
        style={{
          position: 'absolute',
          opacity: opacity.to({ range: [0.0, 0.], output: [0, 1] }),
          fontSize:'50px'
        }}>
       {list2[Math.floor(Math.random() *10)]}

      </animated.button>
    ) : ''
    
    
  )
  

}
export default  Slot2