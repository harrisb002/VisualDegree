import React, { useState } from "react";
import "../../../css/editor_toolbar.css";

export default function ModeSelector({ setMode }) {
  const [currButtonId, setCurrButtonId] = useState("");

  const handleModeSelection = (event, mode) => {
    const button = event.target;
    if (currButtonId === button.id) {
      return;
    }
    document.getElementById(currButtonId)?.classList.toggle("select", false);
    button.classList.toggle("select", true);
    setMode(mode);
    setCurrButtonId(button.id);
  };
  return (
    <div
      id="modeSelector"
      style={{
        position: "absolute",
        bottom: "40px",
        right: "60px",
        gap: "10px",
        zIndex: "1",
      }}>
      <button
        id="buttonMove"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, "move")}>
        👆
      </button>
      <button
        id="buttonConnect"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, "connect")}>
        🔗
      </button>
      <button
        id="buttonDescribe"
        className="btn btn-tool"
        onClick={(event) => handleModeSelection(event, "describe")}>
        🔍
      </button>
    </div>
  );
}
