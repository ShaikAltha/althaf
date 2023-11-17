import  React,{ useState } from "react";
function App(){
    const[name,setname]=useState(0);
    return(
    <div>
        <h1>{name}</h1>
        <button on onClick={()=>setname(name+1)}>change</button>
    </div>
    )

}
export default App;