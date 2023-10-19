import styles from "../linkedin.module.css";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const userProfilePhotoUrl = [
  'https://res.cloudinary.com/dfahwwvue/image/upload/v1697720696/linkedin-user-20_tnk5ln.webp',
  'https://res.cloudinary.com/dfahwwvue/image/upload/v1697720696/linkedin-user-19_akcgpo.webp',
  'https://res.cloudinary.com/dfahwwvue/image/upload/v1697720693/linkedin-user-2_lfrrfh.webp',
  'https://res.cloudinary.com/dfahwwvue/image/upload/v1697720693/linkedin-user-3_mavkmg.webp',

]

export default function MyNetwork() {
  const columns = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.container} container`}>
        <div className="row">
          <div className="col mt-3">
            <h6>People you may know from Harvard</h6>
          </div>
        </div>

        <div className={`row mt-3 d-flex ${styles.userProfilesContainer}`}>
          {userProfilePhotoUrl.map((url) => (
            <div
              className={`${styles.userProfileCard}  ${styles.partialBgRow} col-3 mb-3`}
            >
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-12">
                  <img
                    // src="../../../../public/linkedin-user-1.png"
                    src={url}
                    className={`img-fluid ${styles.linkedinCircle}`}
                  />
                </div>
                <div className="col-12 mt-2">
                  <h6>{faker.person.fullName()}</h6>
                </div>
                <div className="col-12">
                  <p className={`${styles.darkGrey} ${styles.fontSize14}`}>
                    {faker.person.jobTitle()}
                  </p>
                </div>
                <div className="col-12 mt-2">
                  <p
                    className={`${styles.darkGrey}`}
                    style={{ fontSize: "12px" }}
                  >
                    {faker.number.int({ min: 0, max: 100 })} mutal connections
                  </p>
                </div>
                <div className="col-12">
                  <button
                    className={`btn ${styles.lightBlue} ${styles.connectButton} mt-3 mb-4`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
      <path d="M10.87 9.52a1 1 0 01-1.37.37l-2-1A1 1 0 017 8V5a1 1 0 012 0v2.42l1.5.74a1 1 0 01.37 1.36zM15 8a7 7 0 11-7-7 7 7 0 017 7zm-2 0a5 5 0 10-5 5 5 5 0 005-5z"></path>
    </svg> */}
                    <strong className={`${styles.ml3}`}>Connect</strong>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
