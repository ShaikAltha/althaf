function App(){
    const Arry =[ 
        {
            id:1,
            title:"react",
        },
        {
            id:2,
            title:"react app",

        }
    ]
    return(
        <div>
         {
            Arry.map((value)=>
            <li>{ value.id} {value.title}</li>)
         }
    </div>
    )

}
export default App 