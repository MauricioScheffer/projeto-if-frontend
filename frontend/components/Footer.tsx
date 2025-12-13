"use client";
import {useState} from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <p>&copy; 2025 IFSul Campus Sapucaia — DevConecta</p>
        <div className={styles["footer-social"]}>
          <a
            href="https://www.facebook.com/ifsulsapucaia"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook-svgrepo-com.svg" alt="Facebook do IFSul Sapucaia" />
          </a>
          <a
            href="https://www.instagram.com/ifsul_sapucaia/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram-svgrepo-com.svg" alt="Instagram do IFSul Sapucaia" />
          </a>
          <a
            href="https://www.linkedin.com/company/ifsul-sapucaia-do-sul/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn do IFSul Sapucaia" />
          </a>
        </div>
      </div>
    </footer>
  );
}