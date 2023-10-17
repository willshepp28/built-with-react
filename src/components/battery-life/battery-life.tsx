import React from "react";
import "./battery-life.css";

export default function BatteryLife() {
  const batteryLevel = Math.max(0, Math.min(20, 100));
  return (
    <div className="battery-life">
      <div
        className="battery-level"
        style={{ width: `${batteryLevel}%` }}
      ></div>
    </div>
  );
}
