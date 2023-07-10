import React, { useState } from 'react'
import styles from "../styles/List.module.css"
import Card from "../components/Card"
import Aos from 'aos'
import Link from 'next/link'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import your icons
import { faTruck , faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import Icon from "../components/Icon"
import OrderDetail from '../components/OrderDetail'


const List = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container} id='menu'>
        <div className={styles.heading}>
          <span className={styles.title}>Our Services</span>
        </div>
        <div className={styles.wrapper} >
        <Link href="/" passHref>
    <div className={styles.cardContainer} onClick={() => setOpen(true)}>
        {/* <Image className={styles.image} src={list.img} width="50" height="50" alt=""/> */}
        <FontAwesomeIcon icon={faTruck} className={styles.image}  />
        <h1 className={styles.cardtitle} style={{ textDecoration: 'none' }}>Shipping</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        Now you can ship your goods from anywhere to anywhere
        </p>
    </div> 
    </Link>
    
    <div className={styles.cardContainerTwo}>
        {/* <Image className={styles.image} src={list.img} width="50" height="50" alt=""/> */}
        <FontAwesomeIcon icon={faMotorcycle} className={styles.image}/>
        <h1 className={styles.cardtitle} style={{ textDecoration: 'none' }}>Otlop</h1>
        <hr className={styles.line}/>
        <p className={styles.desc} style={{ textDecoration: 'none' }}>
        Now you can order your needs from anywhere anytime.
        </p>
    </div> 
    
      
        </div> 
        {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
  AOS.init();
</script> */}
{open && <OrderDetail setOpen={setOpen}/>} 
{/* {open && <Detail/>} */}
    </div>
  )
}

export default List;