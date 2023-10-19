import styles from "../linkedin.module.css";
import React from "react";
import { faker } from "@faker-js/faker";

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
          {columns.map((columnNumber) => (
            <div
              className={`${styles.userProfileCard}  ${styles.partialBgRow} col-3 mb-3`}
            >
              <div className="row d-flex justify-content-center mt-3">
                <div className="col-12">
                  <img
                    src={`${faker.image.avatarLegacy()}`}
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
                      class="mercado-match"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                    </svg>
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
