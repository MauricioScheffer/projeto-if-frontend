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
              src="/logos/Logo3 br.png"
              alt="Logo DevConecta"
              width={50}
              height={50}
              className={styles.logoImage}
            />
            <span>DEVCONECTA</span>
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
            <li><Link href="/events-list">Eventos</Link></li>
            <li><Link href="/institucional">Instituição</Link></li>
            <li><Link href="/Advisors">Orientadores</Link></li>
            <li><Link href="/contact">Contate-nos</Link></li>
            <li className={styles.mobileLogin}><Link href="/login-sign">Entrar</Link></li>
          </ul>

          <div className={styles.profileAccess}>
            <Link href="/login-sign" className={styles.loginButton} aria-label="Acessar perfil">
              Entrar
            </Link>

            <div className={styles.avatarWrapper}>
              <Link href="/profile" aria-label="Acessar perfil">
                <Image
                  src="/images/sapuca.png"
                  alt="Foto do perfil"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>


      <div className={styles.headerSpacer} aria-hidden="true" />
    </>
  );
}
