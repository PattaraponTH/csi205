// import { useState } from 'react'

import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Adder from "../components/Adder";
import Timer from "../components/Timer";
import Temperature from "../components/Temperature";

const Components = () => {
  // const [counter, setCounter] = useState(0)
  return (
    <>
    <h2 className="text-center fw-bold mt-3 mb-1">COMPONENTS PAGES</h2>
    <RadixCounter />
   <div className="container border border-dark rounded-4 shadow-lg mt-3 p-3"
     style={{
       backgroundImage: "url('/bg.jpg')",
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
     }}
>
  {/* TITLE */}
  <h2 className="text-center bg-black text-white fw-bold py-2 rounded-3 mb-3 m-auto p-2" style={{ width: "fit-content" }}>
    REACT COMPONENTS
  </h2>

  {/* FLEX ROW: VALUE + ADDER */}
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "10px"
  }}>
    {/* LEFT COLUMN: VALUE + TIMER */}
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center",  }}>
      {/* VALUE */}
      <div style={{  }}>
        <Value name={"COUNTER"} initial={0} type={"integer"} />
      </div>
      {/* TIMER ใกล้ Value */}
      <div style={{  }}>
        <Timer />
      </div>
    </div>

    {/* RIGHT COLUMN: ADDER */}
    <div style={{ }}>
      <Adder />
    </div>
  </div>

  {/* TEMPERATURE อยู่กลางใต้ row VALUE+ADDER */}
  <div style={{ display: "flex", justifyContent: "center",  }}>
    <div style={{ width: "fit-content", textAlign: "center" }}>
      <Temperature />
    </div>
  </div>

  {/* FOOTER */}
  <p className="text-center fw-bold bg-black text-white py-2 mt-3 rounded-3 m-auto p-2" style={{ width: "fit-content" }}>
    นายภัทรพล ไหมร้อน รหัส <span className="fw-bold">67171599</span>
  </p>
</div>
    </>
  );
};

export default Components;


 
//         <Value name={"Counter"} initial={10.123} type={"integer"} />
//         {/* <Value name={'Integer Counter'} initial={10} type={'real'} /> */}
//         {/* <Value /> */}
//         {/* <p className='text-center fw-bold mt-3 '>Compoments VALUE</p> */}<Timer />
      
//       <Adder />
//       {/* <p className='text-center fw-bold mt-3 '>Compoments ADDER</p> */}

      
//       {/* <p className='text-center fw-bold mt-3 '>Compoments TIMER</p> */}

//       <Temperature />
//       {/* <p className='text-center fw-bold mt-3 '>Compoments Temperatures</p> */}

//       <p className="text-center fw-bold mt-3 ">67171599 นายภัทรพล ไหมร้อน</p>