import React from "react";
import styles from "./header.hubspot.module.css";

export default function Header() {
  return (
    <nav
      className={`${styles.hubspotNav} navbar navbar-expand-lg navbar-light`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <svg
            viewBox="0 0 16 16"
            height="24px"
            data-test-id="icon-hubspot-logo"
          >
            <title>HubSpot</title>
            <path
              d="M11.6127 10.9174C10.4763 10.9174 9.55512 10.0374 9.55512 8.95201C9.55512 7.86645 10.4763 6.98646 11.6127 6.98646C12.749 6.98646 13.6702 7.86645 13.6702 8.95201C13.6702 10.0374 12.749 10.9174 11.6127 10.9174ZM12.2286 5.16801V3.41954C12.7064 3.20397 13.041 2.74229 13.041 2.20648V2.16612C13.041 1.42664 12.4077 0.821619 11.6336 0.821619H11.5915C10.8174 0.821619 10.1841 1.42664 10.1841 2.16612V2.20648C10.1841 2.74229 10.5187 3.20416 10.9965 3.41972V5.16801C10.2852 5.27306 9.63527 5.55332 9.09927 5.96578L4.07384 2.23138C4.107 2.10973 4.1303 1.9845 4.1305 1.85286C4.13129 1.0155 3.42174 0.335606 2.54479 0.334474C1.66822 0.333532 0.956311 1.01154 0.955323 1.84909C0.954337 2.68665 1.66388 3.36654 2.54084 3.36748C2.82651 3.36786 3.09106 3.29035 3.32283 3.16436L8.26614 6.83803C7.84582 7.44418 7.59944 8.17028 7.59944 8.95201C7.59944 9.77033 7.8701 10.5274 8.32734 11.1499L6.82415 12.5861C6.7053 12.5519 6.58211 12.5282 6.45141 12.5282C5.73101 12.5282 5.14684 13.086 5.14684 13.7742C5.14684 14.4626 5.73101 15.0205 6.45141 15.0205C7.17201 15.0205 7.75599 14.4626 7.75599 13.7742C7.75599 13.6498 7.73112 13.5319 7.69538 13.4184L9.18238 11.9978C9.85738 12.4899 10.698 12.7856 11.6127 12.7856C13.8292 12.7856 15.6257 11.0692 15.6257 8.95201C15.6257 7.03531 14.1517 5.45185 12.2286 5.16801Z"
              fill="#FF7A59"
            ></path>
          </svg>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div> */}
      </div>
    </nav>
  );
}
