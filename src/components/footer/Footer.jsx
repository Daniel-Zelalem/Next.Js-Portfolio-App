import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Zeda.All rights reserved.</div>
      <div className={styles.zeda}>
        <Image
          src="/fb.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Zeda Facebook Account"
        />
        <Image
          src="/tw.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Zeda Twitter Account"
        />
        <Image
          src="/yt.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Zeda YouToub Account"
        />
        <Image
          src="/tg.png"
          width={15}
          height={15}
          className={styles.icon}
          alt="Zeda Telegram Account"
        />
      </div>
    </div>
  );
};

export default Footer;
