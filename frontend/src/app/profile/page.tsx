"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
} from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"; 

interface UserData {
  nomeCompleto: string;
  email: string;
  linkedin: string;
  github: string;
  ocupacao: string;
  sobreMim: string;
}

const PROFILE_KEY = "user_profile";
const IMAGE_KEY = "user_profile_image";

export default function ProfilePage() {
  const [user, setUser] = useState<UserData>({
    nomeCompleto: "",
    email: "",
    linkedin: "",
    github: "",
    ocupacao: "",
    sobreMim: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  function handleLogout() {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChanged"));
    router.push("/");
  }

  useEffect(() => {
    const savedProfile = localStorage.getItem(PROFILE_KEY);
    const savedImage = localStorage.getItem(IMAGE_KEY);

    if (savedProfile) {
      setUser(JSON.parse(savedProfile));
    }

    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function handleSelectedImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      localStorage.setItem(IMAGE_KEY, base64);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    localStorage.setItem(PROFILE_KEY, JSON.stringify(user));
    alert("Dados salvos com sucesso!");
  }

  return (
    <div className={styles.wrapper}>
      {/* FOTO */}
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

        <button
          type="button"
          className={styles.changeButton}
          onClick={openFilePicker}
        >
          Trocar imagem
        </button>
      </div>

      {/* FORMULÁRIO */}
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
              name="ocupacao"
              value={user.ocupacao}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="Aluno">Aluno</option>
              <option value="Egresso">Egresso</option>
              <option value="Docente">Docente</option>
            </select>
          </div>

          <div className={styles.field}>
            <label>Github</label>
            <input
              name="github"
              value={user.github}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>LinkedIn</label>
            <input
              name="linkedin"
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
            Salvar
          </button>

          <button type="button" className={styles.logoutBtn} onClick={handleLogout}>
            Desconectar
          </button>
        </form>
      </div>
    </div>
  );
}
