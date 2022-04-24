import React,{useState}from 'react'
import './App.css' 




function Slot2(){
    const list=[<div id='win1'>♠</div>,<div id='win2'>♥</div>,<div id='win3'>♦</div>,<div id='win4'>♣</div>,<div id='win5'>♤</div>,<div id='win6'>♡</div>,<div id='win7'>♢</div>,<div id='win8' >♧</div>]
    const list1=[<div id='win2.1'>♠</div>,<div id='win2.2'>♥</div>,<div id='win2.3'>♦</div>,<div id='win2.4'>♣</div>,<div id='win2.5'>♤</div>,<div id='win2.6'>♡</div>,<div id='win2.7'>♢</div>,<div id='win2.8' >♧</div>]
    const list2=[<div id='win3.1'>♠</div>,<div id='win3.2'>♥</div>,<div id='win3.3'>♦</div>,<div id='win3.4'>♣</div>,<div id='win3.5'>♤</div>,<div id='win3.6'>♡</div>,<div id='win3.7'>♢</div>,<div id='win3.8' >♧</div>]



    const [toggle,setToggle]= useState(true)
    const [counter, setCounter] = useState(0);
    const  [cash, setCash]= useState(1000) 
     var B = document.getElementById("slot");
     var a = document.getElementById("win1")
     var b = document.getElementById("win2")
     var c = document.getElementById("win3")
     var d = document.getElementById("win4")
     var e = document.getElementById("win5")
     var f = document.getElementById("win6")
     var g = document.getElementById("win7")
     var h = document.getElementById("win8")
     var i = document.getElementById("win2.1")
     var j = document.getElementById("win2.2")
     var k = document.getElementById("win2.3")
     var l = document.getElementById("win2.4")
     var m = document.getElementById("win2.5")
     var n = document.getElementById("win2.6")
     var o = document.getElementById("win2.7")
     var p = document.getElementById("win2.8")
     var q = document.getElementById("win3.1")
     var r= document.getElementById("win3.2")
     var s = document.getElementById("win3.3")
     var t = document.getElementById("win3.4")
     var u = document.getElementById("win3.5")
     var v = document.getElementById("win3.6")
     var w = document.getElementById("win3.7")
     var x = document.getElementById("win3.8")

     
  if (toggle && (list.id=a)&& (list1.id=i)&&(list2.id=q))  alert('') && <div>{setCash(1000-10)}{cash}</div>
  if (toggle && (list.id=b)&& (list1.id=j)&&(list2.id=r)) alert('')
  if (toggle && (list.id=c)&& (list1.id=k)&&(list2.id=s)) alert('')
  if (toggle && (list.id=d)&& (list1.id=l)&&(list2.id=t)) alert('')
  if (toggle && (list.id=e)&& (list1.id=m)&&(list2.id=u)) alert('')
  if (toggle && (list.id=f)&& (list1.id=n)&&(list2.id=v)) alert('')
  if (toggle && (list.id=g)&& (list1.id=o)&&(list2.id=w)) alert('')
  if (toggle && (list.id=h)&& (list1.id=p)&&(list2.id=x)) alert('')









     if (!toggle) {
       
       B.style.color="red";
       B.style.fontSize='150px';
       if (toggle)B.style.fontSize='150px' 
    
     
  
     }
    
    

    if (!toggle)
       counter >= 0 && setTimeout(() => setCounter(counter + 1), 150)
    if (counter + 1) return(

    <div className='grid2'>
    <div   className='slot' style={{color:'green'}} id='slot' >
         {list[Math.floor(Math.random() *8)]}
        </div>
   
      


    <div style={{color:'red'}} className='slot' > {list1[Math.floor(Math.random() *8)]}</div>
    <div style={{color:'purple'}} className='slot'> {list2[Math.floor(Math.random() *8)]}</div>
     < button onClick={()=>setToggle(!toggle)}> spin</button>
    
      </div>
     
    )
   
}

export default Slot2