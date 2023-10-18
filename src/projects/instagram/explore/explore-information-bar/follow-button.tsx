import React, { useState } from "react";
import styles from "./follow-button.module.css";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleClick = () => setIsFollowing(!isFollowing);

  return (
    <button
      className={`btn ${styles.followButton} ${
        isFollowing ? `${styles.btnDarkGrey}` : `${styles.btnLightBlue}`
      }`}
      onClick={() => handleClick()}
    >
      <strong>{isFollowing ? "Following" : "Follow"}</strong>
    </button>
  );
}
