import React from "react";
import IOSBarLeft from "./ios-bar-left";
import IOSBarRight from "./ios-bar-right";

export default function IOSBar() {
  return (
    <div className="row mt-2">
      <div className="col-6 col-md-6 col-lg-6">
        <IOSBarLeft />
      </div>
      <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-end">
        <IOSBarRight />
      </div>
    </div>
  );
}
