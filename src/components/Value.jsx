// src/components/Value.jsx
import { useState, useEffect } from "react";

const Value = ({ name = "VALUE", initial = 0, type = "integer", onChange }) => {
  const [value, setValue] = useState(initial);

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const changeValue = (delta) => {
    setValue((prev) => {
      const newValue = prev + delta;
      if (onChange) onChange(newValue);
      return newValue;
    });
  };

  const displayValue = type === "real" ? value.toFixed(2) : Math.round(value);

  return (
    <div
      className="border border-black border-2 rounded-3 m-auto p-2 bg-secondary-subtle mt-3 "
      style={{  width: "320px", boxSizing: "border-box" }}
    >
      <h1 className="text-primary text-center">{name}</h1>
      <div className="d-flex justify-content-center align-items-center gap-2" >
        <button className="btn btn-danger" onClick={() => changeValue(-1)}>
          &minus;
        </button>
        <div className="fs-3 fw-bold">{displayValue}</div>
        <button className="btn btn-success" onClick={() => changeValue(1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Value;




// import { useState, useEffect } from "react";

// const Value = ({ name, initial, type }) => {
//   const [value, setValue] = useState(initial);

//   useEffect(() => {
//     setValue(initial || 0);
//   }, [initial]);

//     return(
//         <div className="border border-black border-2 rounded-3 m-auto p-2 bg-secondary-subtle mt-3" style={{ width: 'fit-content'}}>
//         <h1 className="text-primary text-center">{name || 'VALUE'}</h1>
//         <div className="d-flex justify-content-between align-items-center gap-2">
//             <button className="btn btn-danger" onClick={ () => setValue((p) => p - 1)
//                     }>
//                         &minus;
//                         </button>
//             <div className="fs-3 fw-bold" >{ type === 'real' ? value.toFixed(2) : Math.round(value) }</div>
//             <button className="btn btn-success"  onClick={ () => setValue((p) => p + 1)
//                     }>+</button>
//         </div>
//         </div>
        
//     )
// }

// export default Value