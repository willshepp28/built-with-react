import React, { useState } from "react";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => setIsFollowing(!isFollowing);

  return (
    <button
      className={`btn follow-button ${
        isFollowing ? "btn-dark-grey" : "btn-light-blue"
      }`}
      onClick={() => handleClick()}
    >
      <strong>{isFollowing ? "Following" : "Follow"}</strong>
    </button>
  );
}
