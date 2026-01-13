import React from "react";

const SecondsCounter = (props) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontSize: "40px",
        fontFamily:'"Times New Roman", serif',
        padding: "20px",
        textAlign: "center"

        
      }}
    >
<i  className="fa-solid fa-clock"></i>      <p>{props.seconds}</p>

<button style={{ borderRadius: '10px'}} onClick={() => window.location.reload()}>
          Reiniciar
        </button>
    </div>
  );
};

export default SecondsCounter;
