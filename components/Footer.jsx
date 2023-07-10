import React from 'react'
import styles from "../styles/Footer.module.css";
import Link from 'next/link';

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
          <li><a href="/">Home</a></li>
          <Link  legacyBehavior href={"/"} > <li><a href="#">Services</a></li></Link>
          <Link  legacyBehavior href={"/"} > <li><a href="#">Feq Question</a></li></Link>
          <Link  legacyBehavior href={"/"} > <li><a href="/about">About Us</a></li></Link>
          </ul>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Footer