// import './style1.css';

import React, {useState,useEffect} from "react";
const URL = "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const App =() =>{
   const [UsersData, setUsersData] = useState([]);
   const [searchTerm, setSearchterm] = useState('');
   const [loading, setLoading] = useState(false);
   const [isError,setIsError] = useState({status:false,msg:''})

   const fetchData = async (apiURL) => {
     setLoading(true)
     setIsError({status:false,msg:''})
     try {
       const response = await fetch(apiURL);
       const {drinks} = await response.json();
       setUsersData(drinks)
       setLoading(false)
       setIsError({status:false,msg:''})
       if(!drinks){
         throw new Error ("data not found")
       }
     } catch (error){
       setLoading(false)
       setIsError({status:true,msg:error.message || "something went wrong..."})
     }
   }
   useEffect(()=>{
     const correctURL = `${URL}${searchTerm}`
     fetchData(correctURL)
    }, [searchTerm])
    return (
     <>
     <div className="container">
       <div className="parent">
         <input typr="text" name ='search' placeholder='search' value={searchTerm} onChange={(e)=> setSearchterm (e.target.value)}/> 
e
       </div>
       <hr/>
       {loading && !isError?.status && <h5>loading....</h5>}
       {
         !loading && !isError?.status && 
         <ul>
           {
             UsersData.map((eachDrink)=>{
               const {strDrinkThumb,strDrink, idDrink} =eachDrink;
               return< li key={idDrink}>
                 <div className="image"><img src={strDrinkThumb} alt=""/></div>
                 <div className="brandName">{strDrink}</div>
               </li>
             })
           }
         </ul>
       }

     </div>
     </>
    )
}
export default App