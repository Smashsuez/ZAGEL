import { useState } from "react";
import styles from "../styles/orderDetail.module.css";
// import emailjs from '@emailjs/browser';

const OrderDetail = ({ total, createOrder, quantity, extra, title, size, setOpen, }) => {
  const [customer, setCustomer] = useState("");  
  const [address, setAddress] = useState("");
  const [SpecialMark, setSpecialMark] = useState("");
  const [phone, setPhone] = useState("");

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     'service_voin4q9', // Replace with your service ID
  //     'template_5dexk3l', // Replace with your email template ID
  //     e.target,
  //     'Ro_eFq8rhrK6vhPck' // Replace with your user ID
  //   ).then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
      

  //     createOrder({ customer, address, total, phone, quantity, extra, title, size });
  // };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <span onClick={()=>setOpen(false)} className={styles.close}>X</span>
        <h1 className={styles.title}>Thanks For Choosing ZAGEL</h1>
        <form >
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
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
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Address"
              type="text"
              className={styles.input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Special Mark</label>
            <textarea
              rows={5}
              placeholder="Special Mark"
              type="text"
              className={styles.input}
              value={SpecialMark}
              onChange={(e) => setSpecialMark(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.button} >
            Order
          </button>
        </form>
        <h1 className={styles.total}>You will pay £ 99</h1>
      </div>
    </div>
  );
};

export default OrderDetail;
