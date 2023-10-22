import React from "react";
import styles from './header.module.css';

export default function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={`${styles.logo}`}
          fill="none"
          height="131"
          viewBox="0 0 200 31"
          width="200"
        >
          {/* Define the specific part of the SVG you want to display using <path> */}
          <path
            d="M45.9546 57.0459h-10.9956v-10.5605h34.4878v10.5605h-10.999v26.7959h-12.4932z"
            fill="#fc5200"
          />
        </svg>
      </a>
    </nav>
  );
}
