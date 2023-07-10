import React from 'react'
import styles from "../styles/Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.left}>
          {/* The <p className={styles.pColor}>Best Agency</p> for Your Businnes */}
          GLOBAL CARRIER NETWORK For <p className={styles.pColor}>Global Business </p>Opportunity
        </div>
        <div className={styles.right}>
          <ul className={styles.ul}>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer