import "./explore.css";
import React from "react";
import IOSBar from "../ios-bar/ios-bar";
import ExploreHeader from "./explore-header/explore-header";

export default function Explore() {
  return (
    <div className="container d-flex flex-column">
      <IOSBar />
      <ExploreHeader />
    </div>
  );
}
