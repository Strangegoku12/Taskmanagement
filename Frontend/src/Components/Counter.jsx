
import React, { useEffect, useState } from "react";


function Counter(){
const [count,setcount]=useState(0);
function handlecount(){
   setcount(count+1)
}
useEffect(()=>{
   const interval=setInterval(()=>{
setcount(precount=>precount+1)
   },1000)

   return ()=>clearInterval(interval)
},[])
    return(
    <>
<h1>{count}</h1>
<button onChange={handlecount}>countme</button>
    </>
    )
}

export default Counter;
