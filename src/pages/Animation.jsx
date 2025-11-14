import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Animation = () => {

  const fWidth = 700;
  const fHeight = 400;
  const bDiameter = 200;
  const maxX = fWidth - bDiameter - 2;
  const maxY = fHeight - bDiameter - 2;

  const [running, setRunning] = useState(false);
  const [selected, setSelected] = useState("none");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState({ right: true, down: true });

  const buttons = ["none","basketball","football","voleyball","human","cartoon","logo"];
  const vx = 5;
  const vy = 5;

  const toggleRun = () => setRunning(!running);
  const handleSelect = (type) => setSelected(type);

  useEffect(() => {
    const interval = setInterval(() => {
      if(running){
        setX(prev => {
          let newX = prev + (direction.right ? vx : -vx);
          if(newX >= maxX) setDirection(d => ({...d,right:false}));
          if(newX <= 0) setDirection(d => ({...d,right:true}));
          return newX;
        });
        setY(prev => {
          let newY = prev + (direction.down ? vy : -vy);
          if(newY >= maxY) setDirection(d => ({...d,down:false}));
          if(newY <= 0) setDirection(d => ({...d,down:true}));
          return newY;
        });
      }
    }, 25);
    return () => clearInterval(interval);
  }, [running, direction]);
  

  const getBallStyle = () => {
    let style = {
      left: x + "px",
      top: y + "px",
      position: "absolute",
      width: bDiameter + "px",
      height: bDiameter + "px",
      borderRadius: "50%",
      border: "1px solid black",
      backgroundColor: "lightblue",
      backgroundPosition: "center",
      backgroundSize: "contain",
      transition: "left 0.025s linear, top 0.025s linear"
    };

    switch(selected){
      case "basketball":
        style.backgroundImage = "url('./image/basketball.png')";
        style.backgroundColor = "transparent";
        break;
      case "football":
        style.backgroundImage = "url('./image/football.png')";
        style.backgroundColor = "transparent";
        break;
      case "voleyball":
        style.backgroundImage = "url('./image/voleyball.png')";
        style.backgroundColor = "transparent";
        break;
      case "human":
        style.backgroundImage = "url('./image/human.png')";
        style.backgroundColor = "transparent";
        break;
      case "cartoon":
        style.backgroundImage = "url('./image/cartoon.png')";
        style.backgroundColor = "transparent";
        break;
      case "logo":
        style.backgroundImage = "url('./image/logo.png')";
        style.backgroundColor = "transparent";
        break;
      default:
        style.backgroundImage = "none";
        style.backgroundColor = "lightblue";
    }
    return style;
  }

  const containerStyle = {
    margin: "auto",
    width: "fit-content",
    border: "1px solid black",
    borderRadius: "1rem",
    padding: "1rem",
    backgroundColor: "#f8f9fa"
  }

  const fieldStyle = {
    width: fWidth + "px",
    height: fHeight + "px",
    border: "1px solid black",
    borderRadius: "1rem",
    position: "relative",
    backgroundImage: "url('./image/field.png')", // BG ครอบเต็ม field
    backgroundSize: "cover",   // ปรับให้เต็มกรอบ
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    margin: "0 auto"
  }

  return (
      <div>
        <h2 className="text-center fw-bold mt-3">ANIMATION PAGES</h2>
    <div style={containerStyle}>
      <div style={fieldStyle}>
        <div style={getBallStyle()}></div>
      </div>

      <div className="d-flex justify-content-between mt-3 flex-wrap gap-2">
        <button 
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={toggleRun}
        >
          {running ? <><i className="bi bi-pause"></i>&nbsp;PAUSE</> : <><i className="bi bi-play"></i>&nbsp;RUN</>}
        </button>

        <div className="d-flex gap-2 flex-wrap">
          {buttons.map(btn => (
            <button
              key={btn}
              className={
                btn==="none"
                  ? selected==="none"?"btn btn-secondary":"btn btn-outline-secondary"
                  : selected===btn?"btn btn-primary":"btn btn-outline-primary"
              }
              onClick={()=>handleSelect(btn)}
            >
              {btn.charAt(0).toUpperCase() + btn.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
    <p className="text-center fw-bold bg-black text-white py-2 mt-3 rounded-3 m-auto p-2" style={{ width: "fit-content" }}>
    นายภัทรพล ไหมร้อน รหัส <span className="fw-bold">67171599</span>
  </p>
    </div>
  )
}

export default Animation;
