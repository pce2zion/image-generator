import Main from "./components/main";
import Nav from "./components/nav";
import { useState } from "react";

function App() {
  const [toggledark, setToggleDark] = useState(false)

    const toggleIn = ()=> {
            setToggleDark(prevDark => !prevDark)
    }

  return (
    <div className="App">
      <Nav 
      toggle = {toggleIn}
      darkmode = {toggledark}
      />
      <Main darkmode = {toggledark} />
    
    </div>
  );
}

export default App;
