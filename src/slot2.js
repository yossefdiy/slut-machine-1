import React,{useState}from 'react'
import './App.css' 




function Slot2(){
    const list=[<div id='win1'>♠</div>,<div id='win2'>♥</div>,<div id='win3'>♦</div>,<div id='win4'>♣</div>,<div id='win5'>♤</div>,<div id='win6'>♡</div>,<div id='win7'>♢</div>,<div id='win8' >♧</div>]
    const list1=[<div id='win2.1'>♠</div>,<div id='win2.2'>♥</div>,<div id='win2.3'>♦</div>,<div id='win2.4'>♣</div>,<div id='win2.5'>♤</div>,<div id='win2.6'>♡</div>,<div id='win2.7'>♢</div>,<div id='win2.8' >♧</div>]
    const list2=[<div id='win3.1'>♠</div>,<div id='win3.2'>♥</div>,<div id='win3.3'>♦</div>,<div id='win3.4'>♣</div>,<div id='win3.5'>♤</div>,<div id='win3.6'>♡</div>,<div id='win3.7'>♢</div>,<div id='win3.8' >♧</div>]



    const [toggle,setToggle]= useState(true)
    const [counter, setCounter] = useState(0);
    let cash=2000
     let B = document.getElementById("slot");
     let a = document.getElementById("win1")
     let b = document.getElementById("win2")
     let c = document.getElementById("win3")
     let d = document.getElementById("win4")
     let e = document.getElementById("win5")
     let f = document.getElementById("win6")
     let g = document.getElementById("win7")
     let h = document.getElementById("win8")
     let i = document.getElementById("win2.1")
     let j = document.getElementById("win2.2")
     let k = document.getElementById("win2.3")
     let l = document.getElementById("win2.4")
     let m = document.getElementById("win2.5")
     let n = document.getElementById("win2.6")
     let o = document.getElementById("win2.7")
     let p = document.getElementById("win2.8")
     let q = document.getElementById("win3.1")
     let r= document.getElementById("win3.2")
     let s = document.getElementById("win3.3")
     let t = document.getElementById("win3.4")
     let u = document.getElementById("win3.5")
     let v = document.getElementById("win3.6")
     let w = document.getElementById("win3.7")
     let x = document.getElementById("win3.8")

     let zz= document.getElementById('spin')
  if (toggle && (list.id=a)&& (list1.id=i)&&(list2.id=q)) alert('win') 
  if (toggle && (list.id=b)&& (list1.id=j)&&(list2.id=r))  alert('win')
  if (toggle && (list.id=c)&& (list1.id=k)&&(list2.id=s))  alert('win')
  if (toggle && (list.id=d)&& (list1.id=l)&&(list2.id=t))  alert('win')
  if (toggle && (list.id=e)&& (list1.id=m)&&(list2.id=u))  alert('win')
  if (toggle && (list.id=f)&& (list1.id=n)&&(list2.id=v))  alert('win')
  if (toggle && (list.id=g)&& (list1.id=o)&&(list2.id=w))  alert('win')
  if (toggle && (list.id=h)&& (list1.id=p)&&(list2.id=x)) alert('win') 

  if (toggle && (list.id=a)&& (list1.id=i)) alert('win') 
  if (toggle && (list.id=b)&& (list1.id=j))  alert('win')
  if (toggle && (list.id=c)&& (list1.id=k))  alert('win')
  if (toggle && (list.id=d)&& (list1.id=l))  alert('win')
  if (toggle && (list.id=e)&& (list1.id=m))  alert('win')
  if (toggle && (list.id=f)&& (list1.id=n))  alert('win')
  if (toggle && (list.id=g)&& (list1.id=o))  alert('win')
  if (toggle && (list.id=h)&& (list1.id=p)) alert('win') 








     if (!toggle) {
      zz.style.backgroundColor='red'

       B.style.color="red";
       B.style.fontSize='50px';
       if (toggle)B.style.fontSize='50px' 
       if (toggle) zz.style.backgroundColor='blue'
     
  
     }
    
    

    if (!toggle)
   
       counter >= 0 && setTimeout(() => setCounter(counter + 1), 150)
    if (counter + 1) return(
   
    
    <><div className='grid2'>

          <div className='slot' style={{ color: 'green' }} id='slot'>

             {list[Math.floor(Math.random() * 8)]}

          </div>


         
          <div style={{ color: 'red' }} className='slot'> {list1[Math.floor(Math.random() * 8)]}</div>

          <div style={{ color: 'purple' }} className='slot'> {list2[Math.floor(Math.random() * 8)]}</div>

          

       <></></div><button className='btn' style={{ color: 'blue'} } id='spin' onClick={() => setToggle(!toggle)}> spin</button>
       {cash}
<div></div></>  
    );
   
}

export default Slot2