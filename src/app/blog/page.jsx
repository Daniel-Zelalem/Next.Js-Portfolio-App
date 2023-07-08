import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
//
async function getData() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export const metadata = {
  title: "Zeda Blog Page",
  description: "Done by zeda next app",
};

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.subContainer}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Blog;
