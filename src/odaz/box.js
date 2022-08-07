import { useState } from "react"
const Bolls = (props) => {

    // const [turn, setTurn] = useState(props.on)
    // const clickMe = ()=>{
    //     setTurn(prevState=> !prevState)
    // }

    return (
        <div className="bolls">
             <div onClick={()=>{props.deClick(props.id)}} style={{backgroundColor :props.on ? "#222222" :"transparent"}} className="box" ></div>
        </div>
      );
}
 
export default Bolls;