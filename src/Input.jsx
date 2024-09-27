import React, { useState } from "react";
import "./input.css";

function Input(props) {
  const [sum, setvalue] = useState("");
  function handel(e) {
    setvalue(sum + e.target.innerHTML);
  }
  function equal() {
    try {
      setvalue(eval(sum));
    } catch (error) {
      setvalue("Error");
    }
  }
  function dele() {
    let ans='';
    for (let i = 0; i < sum.length - 1; i++) {
      ans += sum.charAt(i);
    }
    console.log(ans);
    setvalue(ans);
  }
  const[a, seta]=useState(0);
  function color()
  {
      // const body=document.getElementsByClassName(cal)[0];
      const body = document.getElementsByClassName("cal")[0];
      if(a==0)
      {
         body.style.backgroundColor=' aliceblue';
       seta(1);
      }
      else
      {
        body.style.backgroundColor='white';
        seta(0);
      }

  }

  return (
    <div className="cal">
      <h2>Calucaltor</h2>
      <input type="text" className="input" placeholder="0" value={sum} />

      <div className="btn1">
        <div className="first">
          <button
            onClick={() => {
              setvalue("");
            }}
          >
            Ac
          </button>
          <button onClick={dele}>Dell</button>
          <button onClick={handel}>%</button>
          <button onClick={handel}>/</button>
        </div>

        <div className="secline">
          <button onClick={handel}>7</button>
          <button onClick={handel}>8</button>
          <button onClick={handel}>9</button>
          <button onClick={handel}>*</button>
        </div>

        <div className="third">
          <button onClick={handel}>6</button>
          <button onClick={handel}>5</button>
          <button onClick={handel}>4</button>
          <button onClick={handel}>-</button>
        </div>

        <div className="fourth">
          <button onClick={handel}>3</button>
          <button onClick={handel}>2</button>
          <button onClick={handel}>1</button>
          <button onClick={handel}>+</button>
        </div>

        <div className="five">
          <button onClick={handel}>0</button>
          <button onClick={()=>
            {
              setvalue(0)
            }
          }>00</button>
          <button onClick={equal}>=</button>
          <button onClick={handel}>.</button>
        </div>
      </div>
      <button className="changelight" onClick={color}>Change light</button>
    </div>
  );
}

export default Input;
