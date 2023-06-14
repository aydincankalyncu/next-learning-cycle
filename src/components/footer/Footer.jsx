import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Kalyoncu 2023. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} alt="Kalyoncu" className={styles.icon}/>
        <Image src="/2.png" width={15} height={15} alt="Kalyoncu" className={styles.icon}/>
        <Image src="/3.png" width={15} height={15} alt="Kalyoncu" className={styles.icon}/>
        <Image src="/4.png" width={15} height={15} alt="Kalyoncu" className={styles.icon}/>
      </div>
    </div>
  );
};

export default Footer;
