import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);        // หน่วยเป็นวินาที
  const [running, setRunning] = useState(false);    // สถานะจับเวลาหรือหยุดอยู่
  const intervalRef = useRef(null);                 // ใช้เก็บ interval id

  // 🔹 แปลงวินาที → แสดงผลแบบค่อย ๆ เพิ่มความละเอียด
  const convertToString = (sec) => {
    const DAY = 86400;
    const HOUR = 3600;
    const MINUTE = 60;

    if (sec < 10) {
      // 0s -> 9s
      return `${sec}s`;
    } else if (sec < MINUTE) {
      // 10s -> 59s
      return sec.toString().padStart(2, "0") + "s";
    } else if (sec < HOUR) {
      // 1m -> 59m
      const minutes = Math.floor(sec / MINUTE);
      const seconds = sec % MINUTE;
      return `${minutes}m : ${seconds.toString().padStart(2, "0")}s`;
    } else if (sec < DAY) {
      // 1h -> 23h
      const hours = Math.floor(sec / HOUR);
      const minutes = Math.floor((sec % HOUR) / MINUTE);
      const seconds = sec % MINUTE;
      return `${hours}h : ${minutes.toString().padStart(2, "0")}m : ${seconds
        .toString()
        .padStart(2, "0")}s`;
    } else {
      // มากกว่า 1 วัน
      const days = Math.floor(sec / DAY);
      const hours = Math.floor((sec % DAY) / HOUR);
      const minutes = Math.floor((sec % HOUR) / MINUTE);
      const seconds = sec % MINUTE;
      return `${days}d : ${hours.toString().padStart(2, "0")}h : ${minutes
        .toString()
        .padStart(2, "0")}m : ${seconds.toString().padStart(2, "0")}s`;
    }
  };

  // 🔹 จัดการ interval ด้วย useEffect
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  // 🔹 ปุ่ม Reset
  const handleReset = () => {
    setSeconds(0);
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="border border-black border-3 rounded-3 p-3 mt-4 bg-secondary-subtle shadow-sm"
      style={{ width: "fit-content", marginLeft: "auto", marginRight: "0" }} // ขยับกล่องไปขวา
    >
      <h2 className="text-primary mb-3 text-center">TIMER</h2>

      <input
        value={convertToString(seconds)}
        readOnly
        className="form-control text-end fw-bold fs-5 bg-light-subtle border border-2 border-black"
        style={{ width: "280px", marginBottom: "10px" }}
      />

      <div className="d-flex justify-content-between gap-2">
        <button className="btn btn-danger" onClick={handleReset}>
          <i className="bi bi-arrow-counterclockwise"></i> Reset
        </button>

        <button
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={() => setRunning((r) => !r)}
        >
          {running ? (
            <>
              <i className="bi bi-pause"></i> Pause
            </>
          ) : (
            <>
              <i className="bi bi-play"></i> Run
            </>
          )}
        </button>
      </div>
      
    </div>
  );
};

export default Timer;
