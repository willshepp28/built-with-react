import React from "react";
import IOSBarLeft from "./ios-bar-left";
import IOSBarRight from "./ios-bar-right";

export default function IOSBar() {
  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col">
          <IOSBarLeft />
        </div>
        <div className="col d-flex justify-content-end">
          <IOSBarRight />
        </div>
      </div>
    </div>
  );
}
