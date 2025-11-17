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
      <section className={styles.inicio}>
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
              width={510}
              height={370}
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
          O Campus Sapucaia do Sul do IFSUL oferece formações completas na área
          de Tecnologia da Informação, preparando estudantes para o mercado de
          trabalho e para atuar em projetos de inovação, pesquisa aplicada e
          desenvolvimento de soluções tecnológicas. Os cursos unem teoria,
          prática em laboratório e participação em eventos como hackathons,
          palestras e feiras tecnológicas.
        </p>

        <div className={styles.cursosContainer}>
          {/* CARD 1 - TDS */}
          <div className={styles.card}>
            <div className={styles.tag}>TDS</div>
            <Image
              src="/images/image.jpg"
              alt="Curso Técnico em Desenvolvimento de Sistemas"
              width={350}
              height={220}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>Técnico em Desenvolvimento de Sistemas</h3>
              <p>Integrado ao Ensino Médio. Capacita estudantes para atuar com programação, banco de dados, aplicações
                web e lógica computacional. Os alunos aprendem a desenvolver sistemas reais,
                participar de projetos e trabalhar em equipe utilizando metodologias ágeis.
              </p>

              {/* <a href="#" className={styles.verMais}>
                VEJA MAIS
              </a> */}
            </div>
          </div>

          {/* CARD 2 - TADS */}
          <div className={styles.card}>
            <div className={styles.tag}>TADS</div>
            <Image
              src="/images/image.jpg"
              alt="Curso de Análise e Desenvolvimento de Sistemas"
              width={350}
              height={220}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h3>Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
              <p>O curso forma profissionais capazes de projetar, desenvolver e gerenciar sistemas de software. O
                curso possui forte foco em desenvolvimento full stack, redes, bancos
                de dados, computação em nuvem, arquitetura de software e inovação
                tecnológica.
              </p>
{/* 
              <a href="#" className={styles.verMais}>
                  VEJA MAIS
              </a> */}
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
              O IFSUL promove anualmente diversos eventos voltados à área de
              tecnologia, como feiras de inovação, semanas acadêmicas e
              competições de programação. Nossos estudantes participam de
              projetos de extensão, maratonas de desenvolvimento e palestras
              ministradas por profissionais da indústria, fortalecendo a
              integração entre ensino e mercado de trabalho.
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
          <p>
            Este portal foi desenvolvido pelos estudantes dos cursos Técnico em
            Informática e Tecnólogo em Análise e Desenvolvimento de Sistemas do
            IFSUL – Campus Sapucaia do Sul. O objetivo do projeto é divulgar
            atividades acadêmicas, eventos, projetos, pesquisas e iniciativas da
            área de Tecnologia da Informação. O site também visa aproximar a
            comunidade estudantil, facilitar o acesso a informações relevantes e
            promover a visibilidade dos cursos oferecidos pela instituição.
          </p>


          <div className={styles.cardsWrapper}>
            {[
              { nome: "Mauricio Scheffer", linkedin: "https://www.linkedin.com/in/maur%C3%ADcio-scheffer-silveira-95b972279/", github: "https://github.com/MauricioScheffer" },
              { nome: "Andrew Mattheus", linkedin: "https://www.linkedin.com/in/andrew-mattheus/", github: "" },
              { nome: "Bianca Cabral", linkedin: "", github: "https://github.com/BiancaCabral0312" },
              { nome: "Denis Jesus", linkedin: "https://www.linkedin.com/in/denis-jesus-/", github: "https://github.com/Denio-Jesus2005" },
              { nome: "Arthur Hoffelder", linkedin: "https://www.linkedin.com/in/arthur-hoffelder-4b22322a0/", github: "https://github.com/cmoficial" },
              { nome: "Ismael Machado", linkedin: "https://www.linkedin.com/in/ismaelcostamachado/", github: "https://github.com/icmci" },
              { nome: "Fernanda Walther", linkedin: "https://www.linkedin.com/in/fernanda-walther-fernandes/", github: "https://github.com/aferwf" },
              { nome: "Bianca Leite", linkedin: "https://www.linkedin.com/in/bianca-leite-14502a212/", github: "" },
              { nome: "Cauane Santos", linkedin: "https://www.linkedin.com/in/cauane-santos-269a2b215/", github: "https://github.com/cauanesantosinacio" },
              { nome: "Julio Nascimento", linkedin: "https://www.linkedin.com/in/julio-nascimento-b092811b4/", github: "https://github.com/nascimentoJulio" },
              { nome: "Guilherme Silva", linkedin: "https://www.linkedin.com/in/guilherme-silva-fagundes-5b99551bb/", github: "https://github.com/guilhermesfagundes04" },
              { nome: "João Andrey", linkedin: "https://www.linkedin.com/in/joao-andrey/", github: "https://github.com/Antochevis" },
              { nome: "Rafael Steffen", linkedin: "https://www.linkedin.com/in/rafaeu/", github: "https://github.com/rafasteffen" },
              { nome: "Rodrigo Remor", linkedin: "https://www.linkedin.com/in/rodrigoremor/", github: "" }
            ].map((pessoa, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardContent}>
                  <a href={pessoa.linkedin}>
                    <Image
                      className={styles.iconsP}
                      src="/images/linkedin.png"
                      alt="Linkedin"
                      width={28}
                      height={28}
                    />
                  </a>

                  <a href={pessoa.github}>
                    <Image
                      className={styles.iconsP}
                      src="/images/github.png"
                      alt="Linkedin"
                      width={28}
                      height={28}
                    />
                  </a>
                  <span>{pessoa.nome}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}
