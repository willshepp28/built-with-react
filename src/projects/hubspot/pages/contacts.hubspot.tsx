import React from "react";
import Header from "../components/header/header.hubspot";
import styles from ".././hubspot.module.css"
import { format } from "date-fns"; 

export default function Contacts() {
  return (
    <>
      <Header />
      <div className={`${styles.wrapper} mt-5`}>
        <div className="container">
        
          <div className="row">
            <div className="col d-flex justify-content-start">
                <span className={`${styles.torquiseFont} ${styles.contactsSpan}`}>Contacts</span>
            </div>
            <div className="col d-flex justify-content-end">
            <button type="button" className={`${styles.orangeBackground} ${styles.hubspotButton}`}>Create Contact</button>
            </div>
          </div>

          {/* Table */}
          <div className={`${styles.hubspotBorder} row mt-5`}>
            <table className={`table ${styles.borderGrey} ${styles.hubspotTable}`}>
              <thead className={`${styles.hubspotThead}`}>
                <tr>
                  <th scope="col"><strong>Name</strong></th>
                  <th scope="col"><strong>Email</strong></th>
                  <th scope="col"><strong>Phone Number</strong></th>
                  <th scope="col"><strong>Lead Status</strong></th>
                  <th scope="col"><strong>Create Date</strong></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={`${styles.torquiseFont} ${styles.fontWeight600}`}>Will Sheppard</td>
                  <td className={`${styles.torquiseFont} ${styles.fontWeight600}`}>willsheppard44@gmail.com</td>
                  <td>843-123-5467</td>
                  <td>New</td>
                  <td>Today at {format(new Date(), "h:mm a")}</td>
                </tr>

                <tr>
                  <td>Will Ferrell</td>
                  <td>willferrel@funnyordie.com</td>
                  <td>843-222-3443</td>
                  <td>Open Deal</td>
                  <td>Today at {format(new Date(), "h:mm a")}</td>
                </tr>

                <tr>
                  <td>The Weeknd</td>
                  <td>theweeknd@xorecords.com</td>
                  <td>401-434-5467</td>
                  <td>Connected</td>
                  <td>Today at {format(new Date(), "h:mm a")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
