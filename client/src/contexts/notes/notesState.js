import React ,{useState} from "react";
import noteContext from "./notesContext";

const NoteState = (props) =>{
  const s1={
    "name":"Shashank" 
  }
   const [state, setState] = useState(s1);
   const update = () =>{
    setTimeout(() => {
      setState({
        "name": "Prabhu",
      });
      
    },1000);
   }
  return(
    <noteContext.Provider value={{state,update}}>
      {props.children}
    </noteContext.Provider>
  )

}
export default NoteState