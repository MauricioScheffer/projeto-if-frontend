"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import styles from "./page.module.css";

interface UserData {
  fullName: string;
  email: string;
  dateOfBirth: string;
  address: string;
  gender: string;
  phone: string;
  about: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData>({
    fullName: "",
    email: "",
    dateOfBirth: "",
    address: "",
    gender: "Other",
    phone: "",
    about: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  // abrir explorador de arquivos
  function openFilePicker() {
    fileInputRef.current?.click();
  }

  // pegar foto escolhida
  function handleSelectedImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(user);
    alert("Account updated!");
  }

  return (
    <div className={styles.wrapper}>
      
      {/* COLUNA 1 - FOTO */}
      <div className={styles.left}>
        <h3 className={styles.sectionTitle}>Profile Photo</h3>

        <img
          src={preview || "/placeholder.png"}
          alt="Profile"
          className={styles.preview}
        />

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleSelectedImage}
          accept="image/*"
          style={{ display: "none" }}
        />

        <button className={styles.changeButton} onClick={openFilePicker}>
          Trocar imagem
        </button>
      </div>

      {/* COLUNA 2 - FORMULÁRIO */}
      <div className={styles.right}>
        <h1 className={styles.title}>Account Information</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          
          <div className={styles.field}>
            <label>Full name</label>
            <input
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Date of Birth</label>
            <input
              name="dateOfBirth"
              type="date"
              value={user.dateOfBirth}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Address</label>
            <input
              name="address"
              value={user.address}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Gender</label>
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className={styles.input}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Phone number</label>
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>About you</label>
            <textarea
              name="about"
              value={user.about}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button className={styles.button} type="submit">
            Update account
          </button>
        </form>
      </div>
    </div>
  );
}
