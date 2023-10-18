import React from "react";
import WifiSignal from "../../../components/wifi-signal/wifi-signal";
import BatteryLife from "../../../components/battery-life/battery-life";

export default function IOSBarRight() {
  return (
    <div className="row justify-content-between">
      <div className="col-2">
        <WifiSignal />
      </div>
      <div className="col-8">
        <BatteryLife />
      </div>
    </div>
  );
}
