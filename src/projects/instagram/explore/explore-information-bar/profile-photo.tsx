// import "./profile-photo.css";
import styles from './profile-photo.module.css';

import React from "react";

export default function ProfilePhoto() {
  return (
    <div className="circle">
      <img
        className={`${styles.circleImg}`}
        src="https://res.cloudinary.com/dfahwwvue/image/upload/v1697594796/bali-explore-1_uzgmu1.jpg"
        alt=""
      />
    </div>
  );
}
