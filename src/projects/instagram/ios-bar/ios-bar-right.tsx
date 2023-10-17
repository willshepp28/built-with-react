import React from "react";
import WifiSignal from "../../../components/wifi-signal/wifi-signal";
import BatteryLife from "../../../components/battery-life/battery-life";

export default function IOSBarRight() {
  return (
    <div className="row">
      <div className="col">
        <WifiSignal />
      </div>
      <div className="col">
        <BatteryLife />
      </div>
    </div>
  );
}
