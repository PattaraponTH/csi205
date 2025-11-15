// src/components/Temperature.jsx
import { useState } from "react";
import Value from "./Value";

const Temperature = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [kelvin, setKelvin] = useState(273.15);

  // ฟังก์ชันปรับค่าแต่ละตัว ป้องกัน Infinite Loop
  const handleCelsiusChange = (val) => {
    setCelsius(val);
    setFahrenheit(val * 9 / 5 + 32);
    setKelvin(val + 273.15);
  };

  const handleFahrenheitChange = (val) => {
    const c = (val - 32) * 5 / 9;
    setCelsius(c);
    setFahrenheit(val);
    setKelvin(c + 273.15);
  };

  const handleKelvinChange = (val) => {
    const c = val - 273.15;
    setCelsius(c);
    setFahrenheit(c * 9 / 5 + 32);
    setKelvin(val);
  };

  return (
    <div
      className="border border-black border-2 rounded-3 mx-auto mt-3 p-3 shadow-sm"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-center text-primary mb-3">TEMPERATURES</h1>

      {/* กล่อง Value พร้อม badge บนหัว */}
      <div className="d-flex justify-content-center gap-3">
        <div className="text-center" >
          <div className="badge bg-primary mb-1" style={{  width: "120px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>{celsius.toFixed(2)} °C</div>
          <Value name="CELSIUS" initial={celsius} type="real" onChange={handleCelsiusChange} />
        </div>

        <div className="text-center">
          <div className="badge bg-primary mb-1" style={{  width: "120px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>{fahrenheit.toFixed(2)} °F</div>
          <Value name="FAHRENHIET" initial={fahrenheit} type="real" onChange={handleFahrenheitChange} />
        </div>

        <div className="text-center">
          <div className="badge bg-primary mb-1" style={{  width: "120px", boxSizing: "border-box", height: "40px", fontSize: "1.4rem"}}>{kelvin.toFixed(2)} °K</div>
          <Value name="KELVIN" initial={kelvin} type="real" onChange={handleKelvinChange} />
        </div>
      </div>
    </div>
  );
};

export default Temperature;






// const Temperature = () => {
//     return(
//     <div>
//     <h1>Temperature</h1>
//     </div>
//     )
// }

// export default Temperature