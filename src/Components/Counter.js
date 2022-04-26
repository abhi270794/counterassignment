import React from 'react'
import "./Counter.css"
import {useState} from "react"
export const Counter = () => {
    const [value,setValue] = useState(1)
    const[num,setNum] = useState(1000)
const getdata=(e)=>{
setValue(e.target.value);

}
const data=(e)=>{
setNum(e.target.value);
}
const change=(add,num)=>{
    if(value<num)
    {
   setValue(Number(value)+Number(add))
    }
}
const change1=(add,num)=>{
    
    if(value>0)
   setValue(Number(value)+Number(add))
    
}


  return (
      <>
  <h1>Counter</h1>
  <h2>Enter the maximun value</h2>
  <input className="input1" type="number" onChange={data}/>
  <br></br>
  <br></br>
  <button className='btn1' onClick={()=>change1(-1,num)}>-</button>
  
  <input className="input"  value={value} onChange={getdata}  />
  <button className="btn2" onClick={()=>change(1,num)}>+</button>
</>
  )
}
