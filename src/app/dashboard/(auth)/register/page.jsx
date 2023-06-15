"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });

      res.status === 201 && router.push("/dashboard/login?success=Account has been created");

    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="username"
          className={styles.input}
        />
        <input
          type="email"
          required
          placeholder="email"
          className={styles.input}
        />
        <input
          type="password"
          required
          placeholder="password"
          className={styles.input}
        />
        <button className={styles.button}>Register</button>
        <Link className={styles.container} href="/dashboard/login">
          Login with an existing account
        </Link>
      </form>
      {error && <p>Error occured.</p>}
    </div>
  );
};

export default Register;
