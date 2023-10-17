import React from "react";
import IOSBarLeft from "./ios-bar-left";
import IOSBarRight from "./ios-bar-right";

export default function IOSBar() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <IOSBarLeft />
      </div>
      <div className="col-lg-6 d-flex justify-content-end">
        <IOSBarRight />
      </div>
    </div>
  );
}
