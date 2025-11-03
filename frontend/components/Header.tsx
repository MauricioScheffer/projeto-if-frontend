"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Image
              src="/images/logo.png"
              alt="Logo DevConecta"
              width={50}
              height={50}
              className={styles.logoImage}
            />
            <span>DevConecta</span>
          </div>

          <button
            className={styles.menuToggle}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>

          <ul className={`${styles["nav-links"]} ${open ? styles.open : ""}`}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/about">Cursos</Link></li>
            <li><Link href="/events-news">Eventos</Link></li>
            <li><Link href="/institution">Instituição</Link></li>
            <li><Link href="/mentors">Orientadores</Link></li>
            <li><Link href="/contact">Contate-nos</Link></li>
            <li className={styles.mobileLogin}><Link href="/login-sign">Entrar</Link></li>
          </ul>

          <div className={styles.loginButton}>
            <Link href="/login-sign">Entrar</Link>
          </div>
        </nav>
      </header>

      {/* spacer para evitar que o conteúdo fique por baixo do header fixo */}
      <div className={styles.headerSpacer} aria-hidden="true" />
    </>
  );
}
