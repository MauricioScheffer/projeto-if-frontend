"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import iconProfile from "../icons/iconProfile.png";




export default function LoginRegister() {
  const [isActive, setIsActive] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className={styles.loginPage}>

      <div className={`${styles.container} ${isActive ? styles.active : ""}`}>

        {/* LOGIN */}
        {showLogin && (
          <div className={`${styles.formBox} ${styles.login}`}>
            <form onSubmit={(e) => e.preventDefault()}>
              <h1>Login</h1>

              <div className={styles.inputBox}>
                <input type="text" placeholder="Nome" required />
                <img className={styles.icon} src="/icons/iconProfile.png" alt="Icon Profile" />
              </div>

              <div className={styles.inputBox}>
                <input type="password" placeholder="Senha" required />
                <img className={styles.icon} src="/icons/iconPassWord.png" alt="Icon PassWord" />
              </div>

              <div className={styles.inputBox}>
                <select>
                  <option value="" disabled selected>Ocupação</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Docente">Docente</option>
                </select>
              </div>

              <div className={styles.forgotLink}>
                <a href="#">Esqueceu a sua senha?</a>
              </div>

              <button type="submit" className={styles.btn}>Entrar</button>
            </form>
          </div>
        )}

        {/* REGISTER */}
        {!showLogin && (
          <div className={`${styles.formBox} ${styles.register}`}>
            <form onSubmit={(e) => e.preventDefault()}>
              <h1>Cadastre-se</h1>

              <div className={styles.inputBox}>
                <input type="text" placeholder="Nome" required />
                <img className={styles.icon} src="/icons/iconProfile.png" alt="Icon Profile" />
              </div>

              <div className={styles.inputBox}>
                <input type="email" placeholder="Email" required />
                <img className={styles.icon} src="/icons/iconEmail.png" alt="Icon Email" />

              </div>

              <div className={styles.inputBox}>
                <input type="password" placeholder="Senha" required />
                <img className={styles.icon} src="/icons/iconPassWord.png" alt="Icon PassWord" />
              </div>

              <div className={styles.inputBox}>
                <select>
                  <option value="" selected >Ocupação</option>
                  <option value="Aluno">Aluno</option>
                  <option value="Docente">Docente</option>
                </select>

              </div>

              <button type="submit" className={styles.btn}>Concluir</button>
            </form>
          </div>
        )}

        {/* TOGGLE AREA */}
        <div className={styles.toggleBox}>
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Boas vindas!</h1>
            <p>Ainda não tem uma conta?</p>
            <button className={styles.btnOutiline} onClick={() => { setIsActive(true); setShowLogin(false); }}>
              Cadastrar-se
            </button>
          </div>

          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Boas vindas!</h1>
            <p>Já tem conta?</p>
            <button className={styles.btnOutiline} onClick={() => { setIsActive(false); setShowLogin(true); }}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}