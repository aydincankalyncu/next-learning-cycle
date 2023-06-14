import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/17202950/pexels-photo-17202950/free-photo-of-kent-insanlar-sokak-bina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>
            Handcrafting award winnin digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor amet asdasdagsfhgdsafdhashdfadfasfdhafsdhfsaada
            ahGDAGD AJSHGDSAA adssaasdfd saasf saf.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ?</h1>
          <p className={styles.description}>
            Lorem ipsum dolor amet asdasdagsfhgdsafdhashdfadfasfdhafsdhfsaada
            ahGDAGD AJSHGDSAA adssaasdfd saasf saf.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
