  import {useState} from "react";

function App() {
const[input,setInput]=useState("")
const[newinput,setNewinput]=useState(input)


  return (
     <div>
     <input value={input} onChange={(e)=>{return setInput(e.target.value)}} ></input>
      <button onClick={()=>{setNewinput(input)} }>Show Name</button>
      <h2>{newinput}</h2>
    
    </div>
  );
}

export default App;
