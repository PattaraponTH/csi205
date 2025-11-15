import { useState, useEffect } from "react";

export default function Calculator() {
  const [screen, setScreen] = useState("0");
  const [operator, setOperator] = useState("?");
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [state, setState] = useState("S0");

  // ฟังก์ชัน format ตัวเลขเป็น 3 หลักเว้นวรรค
  const formatNumber = (numStr) => {
    if (numStr === "Error") return numStr;
    const [intPart, decPart] = numStr.split(".");
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return decPart ? `${formattedInt}.${decPart}` : formattedInt;
  };

  const numberclick = (number) => {
    if (state === "S0" || state === "S2" || state === "S_result") {
      setScreen(String(number));
      setState("S1");
    } else if (state === "S1" && screen.replace(/ /g,"").length < 12) {
      setScreen(screen.replace(/ /g,"") + String(number));
    }
  };

  const operatorclick = (op) => {
    if (state === "S1") {
      setFirst(parseFloat(screen.replace(/ /g, "")));
      setOperator(op);
      setState("S2");
    } else if (state === "S2") {
      setOperator(op);
    } else if (state === "S_result") {
      setOperator(op);
      setState("S2");
    } else if (state === "S0") {
      setFirst(parseFloat(screen.replace(/ /g, "")));
      setOperator(op);
      setState("S2");
    }
  };

  const equalclick = () => {
    if (operator !== "?") {
      const secondValue = state === "S_result" ? second : parseFloat(screen.replace(/ /g,""));
      let result = 0;
      if (operator === "+") result = first + secondValue;
      else if (operator === "-") result = first - secondValue;
      // แสดงผลพร้อมเว้นวรรค
      setScreen(String(result));
      setFirst(result);
      setSecond(secondValue);
      setState("S_result");
    }
  };

  const ceclick = () => {
    setScreen("0");
    setFirst(0);
    setSecond(0);
    setOperator("?");
    setState("S0");
  };

  // ฟังก์ชัน keyboard
  const checkkeyboard = (event) => {
    if (event.key >= "0" && event.key <= "9") {
      numberclick(Number(event.key));
    } else if (event.key === "+" || event.key === "=") {
      operatorclick("+");
    } else if (event.key === "-") {
      operatorclick("-");
    } else if (event.key === "=" || event.key === "Enter") {
      equalclick();
    } else if (event.key === "Escape") {
      ceclick();
    }
  };

  // เพิ่ม event listener ตอน mount และ clean up ตอน unmount
  useEffect(() => {
    document.addEventListener("keydown", checkkeyboard);
    return () => document.removeEventListener("keydown", checkkeyboard);
  });

  const renderButton = (text, className, onClick) => (
    <button className={className} onClick={onClick}>{text}</button>
  );

  return (
    <><h2 className="text-center mt-3">CALCULATOR PAGES</h2>
    <div className="calculator-1" style={{
          fontFamily: "'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif",
          fontSize: "xx-large",
          fontWeight: 400, // ปกติ
        }}>
      
      <style>{`
        *{ font-family: 'Franklin Gothic Medium','Arial Narrow',Arial,sans-serif; font-size: medium; }
        .calculator-1 { width: fit-content; margin:1rem auto; border:3px solid black; padding:0.5rem; border-radius:20px; background-color: rgb(240,240,240);}
        .cal-screen { background-color: azure; border:2px solid gray; border-radius:10px; text-align:right; padding:0.5rem; margin:0.125rem 0.125rem 1rem 0.125rem;}
        .cal-btn { width:2.5rem; height:2.5rem; margin:0.25rem 0.125rem; border-radius:10px; border:2px solid gray; }
        .cal-btn-green{ background-color: lightgreen; } .cal-btn-blue{ background-color: lightblue; } .cal-btn-red{ background-color: lightcoral; }
        .cal-btn-hover:hover{ background-color: orange; } .cal-btn-orange{ background-color: orange; } .cal-btn-red:hover{ background-color: red; }
        .student{ text-align:center; }
      `}</style>

      {/* Screen */}
      <div className="cal-screen">{formatNumber(screen)}</div>

      {/* Memory & Clear */}
      <div>
        {renderButton("MC", "cal-btn cal-btn-green", null)}
        {renderButton("MR", "cal-btn cal-btn-green", null)}
        {renderButton("M+", "cal-btn cal-btn-green", null)}
        {renderButton("M−", "cal-btn cal-btn-green", null)}
        {renderButton("CE", "cal-btn cal-btn-red", ceclick)}
      </div>

      {/* Numbers & Operators */}
      <div>
        {[7,8,9].map(n => renderButton(n,"cal-btn cal-btn-blue cal-btn-hover",()=>numberclick(n)))}
        {renderButton("÷","cal-btn cal-btn-green",null)}
        {renderButton("√","cal-btn cal-btn-green",null)}
      </div>
      <div>
        {[4,5,6].map(n => renderButton(n,"cal-btn cal-btn-blue cal-btn-hover",()=>numberclick(n)))}
        {renderButton("×","cal-btn cal-btn-green",null)}
        {renderButton("%","cal-btn cal-btn-green",null)}
      </div>
      <div>
        {[1,2,3].map(n => renderButton(n,"cal-btn cal-btn-blue cal-btn-hover",()=>numberclick(n)))}
        {renderButton("−","cal-btn cal-btn-green cal-btn-hover",()=>operatorclick("-"))}
        {renderButton("1/x","cal-btn cal-btn-green",null)}
      </div>
      <div style={{ fontSize: 'medium' }}>
        {renderButton(0,"cal-btn cal-btn-blue cal-btn-hover",()=>numberclick(0))}
        {renderButton(".","cal-btn cal-btn-blue",null)}
        {renderButton("+/-","cal-btn cal-btn-blue",null)}
        {renderButton("+","cal-btn cal-btn-green cal-btn-hover",()=>operatorclick("+"))}
        {renderButton("=","cal-btn cal-btn-green cal-btn-hover",equalclick)}
      </div>

      
    </div>
    <p className="text-center fw-bold bg-black text-white py-2 mt-3 rounded-3 m-auto p-2" style={{ width: "fit-content" }}>
    นายภัทรพล ไหมร้อน รหัส <span className="fw-bold">67171599</span>
  </p>
  </>

  );
}
