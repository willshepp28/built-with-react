import React from "react";
import ProfilePhoto from "./profile-photo";
import NumberOfPosts from "./number-of-posts";
import FollowButton from "./follow-button";

export default function ExploreInformationBar() {
  return (
    <div className="row mt-4 mb-3">
      <div className="col-4">
        <ProfilePhoto />
      </div>
      <div className="col-7">
        <div className="row text-center">
          <div className="col-12 mb-2">
            <NumberOfPosts />
          </div>
          <div className="col-12 mb-2">
            <FollowButton />
          </div>
          <div className="col-12">
            <p style={{ color: "#A8A8A8", fontSize: "10px" }}>
              See a few top posts each week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
