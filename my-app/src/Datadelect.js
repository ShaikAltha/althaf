export const Resturent = [
    {
  imageURL:"https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=180",
   resturent:"srikanya comfort",
   cusins:"cusins: italian,chinees,north",
   rating:"5 star",
   id :1
    },
  {
  imageURL:"https://tse2.mm.bing.net/th?id=OIP.HnmRcJHagRFLK94E_PcSPQHaE8&pid=Api&P=0&h=180",
  resturent: "srikanya ",
   cusins:"cusins: italian,chinees,north",
   rating:"5 star",
   id :2
  }
]

// import React,{useState} from "react";
// function App() {
//          const [ data,setData]=useState(Resturent)
//         const delectehandler=( recieveid)=>{
//           const filterData=data.filter((eachobj)=>{
//             return(
//                 eachobj.id !=recieveid
//             )
//         })
//         setData(filterData)
//         }
//       return(
//      <div className='Althaf'>
  
//         <ul>
//     {
//          data.map((eachobj)=>{
//           const {imageURL,resturent, cusins,rating,}=eachobj;
//           return(
//             <li key={id}>
//                 <div><img src={imageURL}/></div>
//                 <div>{resturentname}</div>
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