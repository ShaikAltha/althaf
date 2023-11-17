import React,{userstate} from "react";
function App(){
const [ data,setData]=userstate(0)
const changehandler=()=>{
  setData(data-1)
}
const increasehandler=()=>{
  setData(data+1)
}
return(
  <div>
    <button onClick={changehandler}>-</button>
    <span>{data}</span>
    <button onClick={increasehandler}>+</button>
  </div>
)
}
export default App