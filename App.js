import React, { useState } from "react";


const App=()=>{
    
    let time=new Date().toLocaleTimeString()
    const [cTime,setTime]=useState(time)

const updateTime=()=>{
    time=new Date().toLocaleTimeString()
    setTime(time)
   
    
}
setInterval(updateTime,1000)
return(
    <>
    
    <div className="divi">

        <h1>{cTime}</h1>
        
    </div>
    </>
)
}

export default App;