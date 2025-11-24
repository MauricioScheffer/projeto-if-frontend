"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Formulário enviado!");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entre em Contato</h1>

      <form onSubmit={handleSubmit} className={styles.form} aria-label="Formulário de contato">
        <div className={styles.formGroup}>
          <label htmlFor="contact-name">Nome</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
            className={styles.input}
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            className={styles.input}
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="contact-message">Mensagem</label>
          <textarea
            id="contact-message"
            name="message"
            onChange={handleChange}
            value={formData.message}
            className={styles.textarea}
            placeholder="Digite sua mensagem"
            required
          ></textarea>
          <div className={styles.helper} aria-hidden="true">Responda em até 48h.</div>
        </div>

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}
