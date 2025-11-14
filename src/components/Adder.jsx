// src/components/Adder.jsx
import { useState } from "react";
import Value from "./Value";

const Adder = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto mt-3 p-3 shadow-sm"
      style={{ width: "fit-content", minWidt: "" }}
    >
      <h1 className="text-center text-primary mb-3">ADD</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="badge bg-secondary " style={{  width: "100px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>A = {a}</div>
        <div className="badge bg-primary " style={{  width: "140px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>A + B = {a + b}</div>
        <div className="badge bg-secondary " style={{  width: "100px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>B = {b}</div>
      </div>

      <div className="d-flex justify-content-center gap-3">
        <Value name="A" initial={a} type="integer" onChange={setA} style={{ width: "150px" }} />
        <Value name="B" initial={b} type="integer" onChange={setB} style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default Adder;






// import Value from "./Value"
// import { useState } from "react"

// const Adder = () => {

//     const [a, setA] = useState(0);
//     const [b, setB] = useState(0);

//     return(
//         <div className="border border-black border-2 rounded-3 mx-auto mt-3 p-2" style={{width: 'fit-content'}}>
//         <h1 className="text-center">Adder</h1>
//         <div className="d-flex justify-content-between align-items-center">
//             <div className="badge bg-secondary">A = 1</div>
//             <div className="badge bg-primary">A + B = 2</div>
//             <div className="badge bg-secondary">B = 1</div>
//         </div>
//         <div className="d-flex gap-2">
//             <Value name={'A'}/>
//             <Value name={'B'}/>
//         </div>
//         </div>
//     )
// }

// export default Adder