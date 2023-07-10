import React from 'react';
import styles from "../styles/Contact.module.css"
import { useState } from 'react';

const Contact = () => {
    const [customer, setCustomer] = useState("");  
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  return (
    <div className={styles.container}>
      {/* <div className={styles.title}>Start Shipping With ZAGEL</div> */}
    <div className={styles.wrapper}>
      <form >
        <div className={styles.item}>
          <label className={styles.label}>Full Name</label>
          <input
            placeholder="Full Name"
            type="text"
            className={styles.input}
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label >
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Email</label>
          <textarea
            rows={5}
            placeholder="Email"
            type="text"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.button} >
          Submit
        </button>
      </form>
    </div>
  </div>
  );
};

export default Contact;
