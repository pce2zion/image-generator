const Real = () => {
    const thingsArray = ["Thing 1", "Thing 2"]
    const arrayEle = thingsArray.map(thing =>{
       return <p>{thing}</p>
    })
    console.log(arrayEle);
    const handleClick = ()=>{
        const addArray = thingsArray.push(`Thing ${thingsArray.length + 1}`)
    }
    return ( 
        <div className="real">
          <button onClick={handleClick}></button>
        </div>
     );
}
 
export default Real;