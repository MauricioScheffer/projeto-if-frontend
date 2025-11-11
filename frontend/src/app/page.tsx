"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // importante para rodar o carousel no lado do cliente

export default function Home() {
  useEffect(() => {
    // Importa dinamicamente o JS do Bootstrap no lado do cliente
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const professores = [
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
    "/images/image.jpg",
  ];

  return (
    <main className={styles.main}>
      {/* INÍCIO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1>Bem-vindo ao Nosso Site</h1>
            <p>
              Conheça mais sobre Tecnologias e Educação aqui. <br />
              Se inscreva em Eventos e Participe da Nossa Comunidade de
              Estudantes de T.I!
            </p>
            <button className={styles.heroButton}>Saiba mais</button>
          </div>

          <div className={styles.heroRight}>
            <Image
              src="/images/image.jpg"
              alt="Imagem Institucional"
              width={570}
              height={400}
              className={styles.heroImage}
              priority
            />
            <button className={styles.heroButton}>Nossos cursos</button>
          </div>
        </div>
      </section>

      {/* SOBRE OS CURSOS */}
      <section className={styles.sobre}>
        <h2>Sobre os cursos</h2>
        <p className={styles.descricao}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className={styles.cursosContainer}>
          {/* CARD 1 - TDS */}
          <div className={styles.card}>
            <div className={styles.tag}>TDS</div>
            <Image
              src="/images/image.jpg"
              alt="Curso Técnico em Desenvolvimento de Sistemas"
              width={400}
              height={250}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>Técnico em Desenvolvimento de Sistemas</h3>
              <p>Integrado ao Ensino Médio. Lorem ipsum dolor sit amet.</p>
              <a href="#" className={styles.verMais}>
                VEJA MAIS
              </a>
            </div>
          </div>

          {/* CARD 2 - TADS */}
          <div className={styles.card}>
            <div className={styles.tag}>TADS</div>
            <Image
              src="/images/image.jpg"
              alt="Curso de Análise e Desenvolvimento de Sistemas"
              width={400}
              height={250}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#" className={styles.verMais}>
                VEJA MAIS
              </a>
            </div>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.btn}>Veja também os projetos do TDS</button>
          <button className={styles.btn}>Veja também os projetos do TADS</button>
        </div>

        <p className={styles.linkInstituicao}>
          Acesse o site do IFSUL para saber mais sobre a instituição &gt;
        </p>
      </section>

      {/* NOTÍCIAS E EVENTOS */}
      <section className={styles.news}>
        <h1>Notícias e Eventos</h1>
        <div className={styles.newsContent}>
          <div className={styles.cardLeft}>
            <Image
              src="/images/image.jpg"
              alt="Notícias e Eventos"
              width={400}
              height={300}
              className={styles.cardImage}
            />
            <p className={styles.descricao}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              dolorum sequi, dolorem possimus amet voluptatibus at asperiores
              tempore debitis illo aspernatur blanditiis tenetur labore in,
              cupiditate, nulla temporibus ab. Quas.
            </p>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.list}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className={styles.listNews}>
                  <div>
                    <h2>Evento {i + 1}: Subtítulo interessante</h2>
                    <span className={styles.dataEvento}>
                      15 de setembro, 2025
                    </span>
                  </div>
                  <span className={styles.seta}>→</span>
                </div>
              ))}
            </div>
            <button className={styles.botaoEventos}>
              Veja todos os eventos
            </button>
          </div>
        </div>
      </section>

      {/* PROFESSORES */}
      <section className={`${styles.teachers} bg-primary text-white py-5`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h2 className="fw-bold">
                Conheça <br /> Nossos <br /> Professores
              </h2>
            </div>

            <div className="col-md-8">
              <div
                id="carouselProfessores"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="4000"
              >
                <div
                  className="carousel-inner text-center"
                  style={{ padding: "10px 60px" }}
                >
                  {/* Cria slides em grupos de 3 */}
                  {(() => {
                    const slides: React.ReactElement[] = [];
                    const perSlide = 3;

                    for (let i = 0; i < professores.length; i += perSlide) {
                      const chunk = professores.slice(i, i + perSlide);
                      slides.push(
                        <div
                          key={i}
                          className={`carousel-item ${i === 0 ? "active" : ""}`}
                        >
                          <div className="d-flex justify-content-center gap-4 flex-wrap">
                            {chunk.map((f, idx) => {
                              const realIndex = i + idx;
                              return (
                                <div key={realIndex} className="text-center px-2">
                                  <img
                                    src={f}
                                    alt={`Professor ${realIndex + 1}`}
                                    className="rounded-circle shadow"
                                    width="150"
                                    height="150"
                                    style={{
                                      objectFit: "cover",
                                      display: "block",
                                      margin: "0 auto",
                                    }}
                                  />
                                  <p className="mt-3 fw-semibold">
                                    Professor {realIndex + 1}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    return slides;
                  })()}
                </div>

                {/* Controles laterais */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProfessores"
                  data-bs-slide="prev"
                  style={{ zIndex: 20 }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Anterior</span>
                </button>

                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProfessores"
                  data-bs-slide="next"
                  style={{ zIndex: 20 }}
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Próximo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sobre o portal */}
      <section className={styles.portal}>
        <div className={styles.containerPortal}>
          <h1>Sobre o Portal</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Adipisci aliquid repellendus nobis deserunt?
            Quo, culpa voluptatem tenetur iusto harum deserunt
            sint aspernatur totam! Eius vitae sit distinctio
            vero, et odio!</p>

          <div className={styles.cardPortalContainer}>
            <div className={styles.cards}>

              {/* <div className={styles.carouselImage}>
                <Image src="/images/profile.jpg" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Mauricio Scheffer</h3>
              Tech Lead Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div>

            <div className={styles.cards}>

              {/* <div className={styles.carouselImage}>
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Bianca Cabral</h3>
              Desenvolvedora Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons} />
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div>

            <div className={styles.cards}>
              {/* <div className={styles.carouselImage}>
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Arthur Hoffelder</h3>
                Desenvolvedor Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div>

            <div className={styles.cards}>
              {/* <div className={styles.carouselImage}>
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Arthur Hoffelder</h3>
                Desenvolvedor Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div> 

            <div className={styles.cards}>
              {/* <div className={styles.carouselImage}>
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Arthur Hoffelder</h3>
                Desenvolvedor Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div>

            <div className={styles.cards}>
              {/* <div className={styles.carouselImage}>
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.carouselImg}/>
              </div> */}

              <h3>Arthur Hoffelder</h3>
                Desenvolvedor Frontend
              <div className="iconsCard">
                <Image src="/images/github.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
                <Image src="/images/linkedin.png" alt="Pessoas" width={40} height={35} className={styles.icons}/>
              </div>
            </div>

            

          </div>
        </div>
      </section>

    </main>
  );
}
