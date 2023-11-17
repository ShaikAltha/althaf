


import React,{ useState,useEffect} from 'react';
function App (){
  const URL ="https://jsonplaceholder.typicode.com/users"

  const [UsersData,SetUserData]=useState([])
const fetchUserData= async (apiURL)=>{
const response=await fetch(apiURL)
const data=await response.json()
SetUserData(data)
console.log(data)
}
useEffect(()=>{
  fetchUserData(URL)
},[])
return(
  UsersData.map((eachobj)=>{
    const { id,name,username,email,}=eachobj
    return(
      <li key={id}>
        <div>{name}</div>
        <div>{username}</div>
        <div>{ email}</div>
      </li>
    )
  }

  )
)
}
export default App;