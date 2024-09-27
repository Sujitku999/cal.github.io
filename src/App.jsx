import React, { useState } from "react";
import Input from "./Input";

function App() {
  const [theme, setTheme] = useState(0);
  return (
    // <div style={theme?'Class1':'Class2'}>
    <div className={theme==0?'class1':'class2'}>
      <Input/>
      {/* <button className="p" onClick={()=>
        {
           if(theme==0)
           {
            setTheme(1);
           }
           else
           {
            setTheme(0);
           }
        }
      }>color</button> */}
    </div>
    
  );
}

export default App;
