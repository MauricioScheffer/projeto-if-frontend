"use client";

//import Image from "next/image";
import { title } from "process";
import styles from "./page.module.css";
import Image from "next/image";
// importante para rodar o carousel no lado do cliente

export default function Profile() {
  return (
    <main>
      <div className={styles.container}>
        {/* <section className={styles.Profile}> */}
        <div className={styles.sideLeftProfile}>

          {/* <div className="photoProfile"> */}
          <Image
            src="/images/user.png"
            alt="Notícias e Eventos"
            width={340}
            height={325}
            className={styles.cardImage}
          />
          <h2>Nome Completo do Aluno</h2>
          <h3>Nome Perfil</h3>

          <button className={styles.button}>Editar Perfil</button>
          {/* </div> */}
        </div>

        <div className={styles.coursesProfile}>
          <div className={styles.courses}>
            {Array.from({ length:10 }).map((_, i) => (
                <div key={i} className={styles.listNews}>
                  <div>
                  <h1>Nome do Curso</h1>
                  <p>Primeiro Semestre</p>
                </div>

                <button>Provas</button>
                <button>Trabalhos</button>
                <button>Notas</button>
                </div>
              ))}

          </div>
        </div>
        {/* </section> */}
      </div>
    </main>
  );
}