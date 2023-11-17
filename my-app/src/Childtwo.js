import { UserContext } from "./App";
import React from "react";
const Childtwo =() =>{
    return(
        <div>
        <UserContext.Consumer>
            {value=><div>{value}</div>}
        </UserContext.Consumer>
        </div>
    )
}
export default Childtwo