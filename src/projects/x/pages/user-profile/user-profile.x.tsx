import React from "react";
import { useParams, Outlet, Route, Routes } from "react-router-dom";
import Status from "../status/status.x";
import styles from "../.././x.module.css";

const UserProfile: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const createdAt: Date = new Date();

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.grid}`}>
        <section
          className={`${styles.sidebar} ${styles.boxWidth} ${styles.greyBorder} ${styles.greyBg}`}
        ></section>

        <main
          className={`${styles.statusGrid} ${styles.boxWidth} ${styles.greyBorder} ${styles.greyBg}`}
        >
          {/* HEADER */}
          <header
            className={`${styles.greyBg} ${styles.statusItem} ${styles.statusHeader}`}
          >
            <h5>Post</h5>
          </header>

          {/* USER INFO */}
          <section
            className={`${styles.statusUserInfo} ${styles.greyBg} ${styles.statusItem}`}
          >
            <img
              src="../../../../../public/brian-acton.jpeg"
              alt={`A picture of Brian Acton`}
              loading="lazy"
            />
            <div>
              <h6>Brian Acton</h6>
              <p>@brianacton</p>
            </div>
          </section>

          {/* STATUS */}
          <section
            className={`${styles.statusCaption} ${styles.greyBg} ${styles.statusItem}`}
          >
            <h6>
              Facebook turned me down. It was a great opportunity to connect
              with some fantastic people. Looking forward to life's next
              adventure.
            </h6>
          </section>

          {/* DATE */}
          <section
            className={`${styles.statusDate} ${styles.greyBg} ${styles.statusItem}`}
          >
            {createdAt.toString()}
          </section>

          {/* METRICS */}
          <section
            className={`${styles.statusMetrics} ${styles.greyBg} ${styles.statusItem}`}
          >
            <span>9,901 Reposts</span>
            <span>679 Quotes</span>
            <span>12.2K Likes</span>
            <span>537 Bookmarks</span>
          </section>

          {/* METRIC COUNT */}
          <section
            className={`${styles.statusMetricsCount} ${styles.greyBg} ${styles.statusItem}`}
          ></section>
          <section
            className={`${styles.statusIcons} ${styles.greyBg} ${styles.statusItem}`}
          ></section>
        </main>

        <section
          className={`${styles.info} ${styles.boxWidth} ${styles.greyBorder} ${styles.greyBg}`}
        ></section>
      </div>
      {/* <Routes>
        <Route path="status/:id" element={<Status />} />
      </Routes> */}
    </div>
  );
};

export default UserProfile;
