"use client";

import Image from "next/image";
import styles from "./page.module.css";

interface ProfessorCardProps {
  nome: string;
  disciplina: string;
  descricao: string;
  foto?: string;
  linkedin?: string;
  lattes?: string;
  onClose: () => void;
}

export default function ProfessorCard({
  nome,
  disciplina,
  descricao,
  foto,
  linkedin,
  lattes
}: ProfessorCardProps) {
  const imagem = foto || "/image.jpg";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagem}
          alt={nome}
          width={120}
          height={120}
          className={styles.profImg}
        />
      </div>

      <h3 className={styles.cardName}>{nome}</h3>
      <strong className={styles.cardSubtitle}>{disciplina}</strong>
      <p className={styles.cardDesc}>{descricao}</p>

      <div className={styles.linksWrapper}>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              width={26}
              height={26}
              className={styles.icon}
            />
          </a>
        )}

        {lattes && (
          <a href={lattes} target="_blank" rel="noopener noreferrer">
            <Image
              src="/lattes.svg"
              alt="Lattes"
              width={26}
              height={26}
              className={styles.icon}
            />
          </a>
        )}
      </div>
    </div>
  );
}
