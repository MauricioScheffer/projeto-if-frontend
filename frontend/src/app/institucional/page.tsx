"use client";


import { useRef } from 'react';
import Image from 'next/image';
import styles from './institucional.module.css';

export default function InstitucionalPage() {
  
  // --- Lógica do Carrossel ---
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>

        {/* --- CABEÇALHO --- */}
        <header className={styles.header}>
          <div className={styles.logoContainer}>
             <img src="/images/logoIFbranca.png" alt="IFSul Logo" className={styles.logo} />
          </div>
          <h1>IFSul – Câmpus Sapucaia do Sul</h1>
          <p className={styles.subtitle}>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul</p>
        </header>

        {/* --- SEÇÃO 1 --- */}
        <section className={styles.infoSection}>
          <div className={styles.infoText}>
            <h2>O que é o IFSul?</h2>
            <p>O Instituto Federal Sul-rio-grandense (IFSul) é uma instituição pública federal de educação, ciência e tecnologia que oferece ensino gratuito em diversas áreas do conhecimento. Ele integra a rede de Institutos Federais do Brasil e atua com cursos técnicos, superiores, pós-graduação e qualificação profissional, sempre voltados para a formação prática, inovação e desenvolvimento regional. O IFSul combina ensino, pesquisa e extensão, aproximando os estudantes do mercado de trabalho e de projetos que impactam a comunidade, mantendo um forte compromisso com inclusão, tecnologia e qualidade de ensino.</p>
            <a href="http://www.sapucaia.ifsul.edu.br/" target="_blank" className={styles.outlineButton}>
              Acesse o site oficial
            </a>
          </div>
          <div className={styles.infoImage}>
            <img src="/imagensIfsul/ifsul-parede.jpg" alt="Sala de aula" />
          </div>
        </section>

        {/* --- SEÇÃO 2 --- */}
        <section className={styles.infoSection}>
          <div className={styles.infoText}>
            <h2>Papel do câmpus na comunidade</h2>
            <p>O câmpus do IFSul exerce um papel significativo na comunidade ao oferecer ensino público gratuito e formar profissionais capacitados para atender às demandas locais. Além das aulas, o câmpus promove projetos de pesquisa, extensão e ações comunitárias que aproximam alunos, moradores e empresas, gerando soluções práticas para problemas reais da região.</p>
          </div>
          <div className={styles.infoImage}>
            <img src="/imagensIfsul/IMG_0561.jpg" alt="Corredor da escola" />
          </div>
        </section>

            {/* --- SEÇÃO 3: CURSOS --- */}
            <section className={styles.coursesSection}>
            <div className={styles.coursesCardOuter}>
                <h3>Cursos ofertados</h3>
                <div className={styles.coursesCardInner}>
                <div className={styles.coursesGrid}>
                
                {/* Coluna 1: Cursos Técnicos */}
                <div className={styles.courseColumn}>
                  <h4>Cursos Técnicos</h4>
                  <div className={styles.courseItem}>
                    <strong>Manhã:</strong>
                    <p>Desenvolvimento de sistemas (Ensino Médio integrado)</p>
                    <p>Eventos (Ensino Médio integrado)</p>
                  </div>
                  <div className={styles.courseItem}>
                    <strong>Tarde:</strong>
                    <p>Plástico (Ensino Médio integrado)</p>
                    <p>Mecânica (Ensino Médio integrado)</p>
                  </div>
                </div>

                {/* Coluna 2: Cursos Superiores */}
                <div className={styles.courseColumn}>
                  <h4>Cursos Superiores</h4>
                  <div className={styles.courseItem}>
                    <strong>Noite:</strong>
                    <p>Análise e Desenvolvimento de sistemas</p>
                    <p>Engenharia Mecânica</p>
                  </div>
                  <div className={styles.courseItem}>
                    <strong>EAD:</strong>
                    <p>Gestão em Turismo</p>
                  </div>
                </div>

                {/* Coluna 3: Pós-graduação E Educação de Jovens e Adultos */}
                <div className={styles.courseColumn}>
                  
                  {/* Bloco de Pós-graduação */}
                  <div style={{ marginBottom: '2rem' }}>
                    <h4>Pós-graduação</h4>
                    <div className={styles.courseItem}>
                      <strong>EAD:</strong>
                      <p>Especialização em Educação</p>
                    </div>
                  </div>
                <br></br><br></br>
                  {/* Bloco de EJA (Agora embaixo da Pós-graduação na mesma coluna) */}
                  <div>
                    <h4>Educação de Jovens e Adultos</h4>
                    <div className={styles.courseItem}>
                      <strong>Noite:</strong>
                      <p>Administração (PROEJA - Ensino Médio integrado)</p>
                    </div>
                  </div>

                </div>

              </div>
                <div className={styles.cardButtonWrapper}>
                    <a href="http://www.sapucaia.ifsul.edu.br/" className={styles.outlineButton}>Acesse o site oficial</a>
                </div>
                </div>
            </div>
            </section>

        {/* --- SEÇÃO 4: INFRAESTRUTURA (CARROSSEL) --- */}
        <section className={styles.infraSection}>
          <h2>Infraestrutura</h2>
          <p>O câmpus do IFSul conta com uma infraestrutura completa e moderna, projetada para oferecer um ambiente de aprendizagem confortável e eficiente. As instalações incluem salas de aula equipadas, laboratórios especializados, biblioteca atualizada, auditórios e áreas de convivência. Além disso, o câmpus também dispõe de quadras esportivas, horta comunitária e academia, que ampliam as possibilidades de atividades físicas, projetos ambientais e integração dos estudantes.</p>
          
          <div className={styles.carouselWrapper}>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={scrollLeft}>
              &lt;
            </button>

            {/* Container das Imagens */}
            <div className={styles.infraGallery} ref={carouselRef}>
              <img src="/imagensIfsul/IMG_1642.jpg" alt="Infra 1" />
              <img src="/imagensIfsul/IMG_1504.jpg" alt="Infra 2" />
              <img src="/imagensIfsul/IMG_1570.jpg" alt="Infra 3" />
              <img src="/images/image.jpg" alt="Infra 4" />
              <img src="/images/image.jpg" alt="Infra 5" />
              <img src="/images/image.jpg" alt="Infra 6" />
            </div>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={scrollRight}>
              &gt;
            </button>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className={styles.footer}>
          <div className={styles.footerColumn}>
            <h3>Localização</h3>
            <p>Av. Copacabana - Piratini, Sapucaia do Sul – RS, 93216-120</p>
            <div className={styles.mapContainer}>
              <iframe 
                width="100%" 
                height="200" 
                frameBorder="0" 
                style={{ border: 0 }} 
                src="https://maps.google.com/maps?q=IFSul%20-%20C%C3%A2mpus%20Sapucaia%20do%20Sul&t=&z=15&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.contactBlock}>
              <h3>Contatos</h3>
              <p>Telefones:(51) 3452-9200</p>
              <p>E-mail: email@gmail.com</p>
            </div>
            <div className={styles.contactBlock}>
              <h3>Horários</h3>
              <p>Seg à Sex: 7h - 23h</p>
              <p>Sab: Sem funcionamento</p>
              <p>Dom: Sem funcionamento</p>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}