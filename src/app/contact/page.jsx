import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import contact from "public/c.png";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Zeda Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let&apos;s Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={contact} alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="5"
          ></textarea>
          <Button url="#" text="send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
