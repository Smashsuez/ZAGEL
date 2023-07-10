import React from 'react'
import styles from "../styles/Feature.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSackDollar, faTruck, faPeopleCarryBox, faBoxArchive,faHourglassHalf} from '@fortawesome/free-solid-svg-icons';

const Icon = () => {
  return (
    <>
    <div className={styles.icons}>
    <span  className={styles.item}>
    <FontAwesomeIcon icon={faSackDollar} className={styles.icon} />
    <div>Cash on Delivery</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faTruck} className={styles.icon}/>
    <div>Swift Delivery</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faHourglassHalf} className={styles.icon}/>
    <div>Timely Deliver</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faPeopleCarryBox} className={styles.icon}/>
    <div>Door TO Door</div>
    </span>
    <span className={styles.item}>
    <FontAwesomeIcon icon={faBoxArchive} className={styles.icon}/>
    <div>Secure Delivery</div>
    </span>
    </div>
    </>
  )
}

export default Icon