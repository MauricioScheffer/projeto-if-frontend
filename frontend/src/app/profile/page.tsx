"use client";

import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import styles from "./page.module.css";
import fotoPerfilPadrão from "../icons/fotoPerfilPadrão.webp";
import { Life_Savers } from "next/font/google";


interface UserData {
  nomeCompleto: string;
  email: string;
  linkedin: string;
  github: string;
  ocupacao: string;
  sobreMim: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserData>({
    nomeCompleto: "",
    email: "",
    linkedin: "",
    github: "",
    ocupacao: " ",
    sobreMim
      : "",
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
    alert("Dados atualizados com sucesso!");
  }

  return (
    <div className={styles.wrapper}>

      {/* COLUNA 1 - FOTO */}
      <div className={styles.left}>
        <h3 className={styles.sectionTitle}>Foto de perfil</h3>

        <img
          src={preview || "/icons/fotoPerfilPadrão.webp"}
          alt="Foto"
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
        <h1 className={styles.title}>Dados pessoais</h1>

        <form onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.field}>
            <label>Nome completo</label>
            <input
              name="nomeCompleto"
              value={user.nomeCompleto}
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
            <label>Ocupação</label>
            <select
              name="Ocupação"
              value={user.ocupacao}
              onChange={handleChange}
              className={styles.input}
            >
              <option selected disabled> </option>
              <option>Aluno</option>
              <option>Egresso</option>
              <option>Docente</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Github</label>
            <input
              name="github"
              type="github"
              value={user.github}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Linkedin</label>
            <input
              name="linkedin"
              type="linkedin"
              value={user.linkedin}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Sobre mim</label>
            <textarea
              name="sobreMim"
              value={user.sobreMim}
              onChange={handleChange}
              className={styles.textarea}
            />
          </div>

          <button className={styles.button} type="submit">
            Concluir
          </button>
        </form>
      </div>
    </div>
  );
}
