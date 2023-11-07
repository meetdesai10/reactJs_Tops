import React, { useState } from 'react'

export default function Radio() {
    let[data,setdata]=useState("");
    let data2="";
    function inputvalue(e){
        data2=e.target.value;
    }
    function showvalue(){
        setdata(data2);
        document.querySelectorAll(".radioval").forEach((value)=>value.checked=false);
    }
  return (
    <>
    <div>
    <h2>Which is not fruit in these given option</h2>
    <input type="radio" className='radioval' onChange={inputvalue} value="apple" name="Fruits" id="" />  apple
    <br />
    <input type="radio" className='radioval' onChange={inputvalue} value="orange" name="Fruits" id="" />  orange
    <br />
    <input type="radio" className='radioval' onChange={inputvalue} value="banana" name="Fruits" id="" />  banana
    <br />
    <input type="radio" className='radioval' onChange={inputvalue} value="mango" name="Fruits" id="" />  mango
    <br />
    <input type="radio" className='radioval' onChange={inputvalue} value="cucumber" name="Fruits" id="" />  cucumber
    <br />
    <button onClick={showvalue}>submit</button>
    </div>
    <h1>{data}</h1>
    </>
  )
}
