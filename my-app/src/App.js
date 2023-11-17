 



// import App from "./Usereffect";   
// import App from "./map";
// import App from "./usestate";
// import React,{UseReducer,UserContext} from 'react'
// import React from "react";
// import Childtwo from "./Childtwo";

import React,{ useState,useEffect } from "react"

// import { useRef, useState } from "react";

// export const UserContext = React.createContext()
// function App (){
//     return(
//         <>
//         <div className='App'>
//             <UserContext.Provider value={"coming from coding"}>
//                 <Childtwo/>
//             </UserContext.Provider>
    
//         </div>
//         </>
//     )
// }
// import App from "./Datadelect";
// import React,{useState} from "react";
// import { Resturent  } from "./Datadelect";

// function App() {
//          const [ data,setData]=useState(Resturent)
//         const delectehandler=( recieveid)=>{
//           const filterData=data.filter((eachobj)=>{
//             return(
//                 eachobj.id !== recieveid
//             )
//         })
//         setData(filterData)
//         }
//       return(
//      <div className='Althaf'>
  
//         <ul>
//     {
//          data.map((eachobj)=>{
//           const { id,imageURL,resturent, cusins,rating,}=eachobj;
//           return(
//             <li key={id}>
//                 <div><img src={imageURL} alt=""/></div>
//                 <div>{resturent}</div>
//                 <div>{cusins}</div>
//                 <button onClick={()=> delectehandler(id)}>Delect</button>

//             </li>
//           )

//   })
//     }
//     </ul>
//   </div>
//   )
// }
 
// export default App
// function App(){
//   let ref = useRef(0)
//   function handlclick(){
//     ref.current=ref.current+1
//     alert("clicked"+ref.current +"times!")
//   }
//   return(
//     <div className="container">
//       <button onClick={handlclick}> share the post</button>
//     </div>
//   )
// }
// export default App;
// import "./Althaf.css";
// const Watch =() =>{
//   const [startTime,setStartTime]= useState(null)
//   const [now,setNow]=useState(null)
//   const intervalRef= useRef(null)
//   function handleStart(){
//     setStartTime(Date.now())
//     setNow(Date.now())
//     clearInterval(intervalRef.current)
//     intervalRef.current =setInterval(()=>{
//       setStartTime(Date.now())

//     },10)

  
//   }
//   function stopTime(){
//     clearInterval(intervalRef.current)
//   }
//   let secondsPassed= 0;
//   if( startTime!== null && now !== null){
//     secondsPassed =(startTime - now)/1000

//   }
//   return(
//     <div className="Althaf">
//       <li>
//     <h4>{secondsPassed.toFixed(3)}</h4>
//     <button onClick={handleStart}>startime</button>
//     <button onClick={stopTime}>stoptime</button>
//     </li>
//     </div>
//   )
//   } 
//   export default Watch;


  const App =()=> {

const [count,setCount]=useState(0)
const [ number,setNumber]=useState(5)
const factorial =React.useMemo(()=>fact(number),[number])
const handlechange =()=>{
  setCount(count+1)
}
return(
  <>
  {factorial}
  <button onClick={handlechange}>share</button>
  {count}
  </>
)
  }
  const fact =(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--){
      answer=answer*i
    }
    console.log("factorical called")
    return(answer)
  }
  export default App
  