import React from "react";

const SecondsCounter = ({ seconds }) => {
  const digits = String(seconds).padStart(6, "0").split("");

  return (
    <div className="counter-wrap">
      <div className="counter-bar">
        <div className="digit-box icon-box">
          <i className="fa-solid fa-clock" />
        </div>

        {digits.map((d, i) => (
          <div className="digit-box" key={i}>
            {d}
          </div>
        ))}
      </div>

      <button className="reset-btn" onClick={() => window.location.reload()}>
        Reiniciar
      </button>
    </div>
  );
};

export default SecondsCounter;
