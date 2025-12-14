"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { getAllNews, News, NewsAPI } from "../../../api/news.api";

export default function NoticiasEventos() {
  const [news, setNews] = useState<News[]>([]);

  const fetchNews = async () => {
    const data = await getAllNews();
    setNews(data);
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main className={styles["app-container"]}>
      <section className={styles["noticias-container"]}>
        <div className={styles["noticias-left"]}>
          <h1 className={styles.titulo}>Notícias e eventos</h1>

          <div className={styles["imagem-wrapper"]}>
            <Image
              src="/images/image.jpg"
              alt="Evento de tecnologia"
              width={600}
              height={400}
              className={styles["imagem-evento"]}
            />
          </div>

          <p className={styles.descricao}>
            Lorem ipsum dolor sit amet. Vel adipisci commodi non vitae aliquid
            hic unde cupiditate. 33 ratione galisum ut odio quod sed voluptatem
            rerum id sint esse sit totam corporis qui earum dolores ab omnis
            asperiores! Ea omnis minus et ratione veritatis a nobis optio At
            laborum accusantium ab consequatur eaque? Ut exercitationem
            molestiae et voluptas doloribus hic error laboriosam non cupiditate
            natus et repellendus dolor est numquam perspiciatis ab sapiente
            repellendus.
          </p>

          {/*<button className={styles["botao-eventos"]}>
            Veja todos os eventos
          </button>*/}
        </div>

        <div className={styles["noticias-right"]}>
          <div className={styles["lista-eventos"]}>
            {news.map((event, i) => (
              <div key={i} className={styles["evento-item"]}>
                <h3>
                  {event.titulo} <span>{event.resumo}</span>
                </h3>
                <span className={styles.data}>{event.data}</span>
                <span className={styles.seta}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
