function User(props){
    console.log(props);
    return(
        <>
        <h1>name:{props.name}</h1>
        <h1>age:{props.age}</h1>
        <h1>gender:{props.gender}</h1>
        </>
    )

    
}
export default User