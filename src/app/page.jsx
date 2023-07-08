import Image from "next/image";
import styles from "./pages.module.css";
import home from "public/home.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Do Excellence Design For Your Smart Products.
        </h1>
        <p className={styles.discription}>
          Please Give Attention On Reality. We Work Together With Teams In
          Digital Industry
        </p>
        <Button url="/portfolio" text="See More" />
      </div>
      <div className={styles.item}>
        <Image src={home} alt="HomePage" className={styles.image} />
      </div>
    </div>
  );
}
