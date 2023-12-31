import styles from "./explore.module.css";
import React from "react";
import IOSBar from "../ios-bar/ios-bar";
import ExploreHeader from "./explore-header/explore-header";
import ExploreInformationBar from "./explore-information-bar/explore-information-bar";
import ExplorePosts from "./explore-posts/explore-posts";

export default function Explore() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container} container d-flex flex-column`}>
        <IOSBar />
        <ExploreHeader />
        <ExploreInformationBar />
        <ExplorePosts />
      </div>
    </div>
  );
}
