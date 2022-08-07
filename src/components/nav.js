import Meme from "../images/logo192.png"
import toff from "../images/off.png"
import ton from "../images/on.png"
const Nav = (props) => {
    return ( 
        <div className= {props.darkmode ? "dark" : "nav"}>
            <img className="logo" src={Meme} alt="a useful meme" />
            <div className="space">
                <h2 className="title">Meme Generator</h2>
                <div className="load"> 
                    <h3 className="light">Light</h3> 
                    <img onClick={props.toggle} src= {props.darkmode ? toff : ton} alt="a togglebtn" /> 
                    <h3 className="darks">Dark</h3>
                </div>
               
            </div>
            
        </div>
     );
}
 
export default Nav;