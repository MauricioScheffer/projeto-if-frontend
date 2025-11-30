"use client";

import { useState } from 'react';
import styles from './page.module.css';

// --- CONFIGURAÇÃO DAS IMAGENS ---
const heroImage = '/images/image.jpg';
const projectImg1 = '/images/image.jpg';
const projectImg2 = '/images/image.jpg';
const projectImg3 = '/images/image.jpg';

// --- CONFIGURAÇÃO DO CONTEÚDO DOS MODAIS ---
const conteudoModais: Record<string, { titulo: string; links: string[] }[]> = {
  
  "Inscrições & Admissão": [
    {
      titulo: "Processo Seletivo",
      links: ["Edital Vigente", "Acompanhar Inscrição"]
    },
    {
      titulo: "Matrículas",
      links: ["Documentação Necessária", "Cronograma", "Resultado Final"]
    }
  ],

  "Acadêmico": [
    {
      titulo: "TDS - Técnico",
      links: ["Grade Curricular", "Emendas", "Horários"]
    },
    {
      titulo: "TADS - Tecnólogo",
      links: ["Grade Curricular", "Emendas", "Horários"]
    }
  ],

  "Plataformas & Ferramentas": [
    {
      titulo: "Sistemas",
      links: ["Moodle", "SUAP", "Biblioteca Virtual"]
    },
    {
      titulo: "Comuidade",
      links: ["Discord", "WhatsApp"]
    }
  ],

  "Apoio & Oportunidades": [
    {
      titulo: "Assistência Estudantil",
      links: ["Editais de Auxílio", "Alimentação", "Transporte"]
    },
    {
      titulo: "Carreira",
      links: ["Mural de Estágios", "Monitoria", "Bolsas de Pesquisa"]
    }
  ],

  "Documentação & Regulamentos": [
    {
      titulo: "Institucional",
      links: ["Regulamento Didático", "PPC do Curso", "Regimento Interno"]
    },
    {
      titulo: "Formulários",
      links: ["Requerimento Geral", "Aproveitamento de Disciplinas", "Validação de ACs"]
    }
  ],

  "Galeria": [
    {
      titulo: "Eventos",
      links: ["Semana Acadêmica", "Hackathon", "Visitas Técnicas"]
    },
    {
      titulo: "Projetos",
      links: ["Extensão", "TCCs Destaque"]
    }
  ]
};


export default function HomePage() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalKey, setActiveModalKey] = useState<string>('');

  const openModal = (key: string) => {
    if (isModalOpen && activeModalKey === key) {
      setIsModalOpen(false);
    } else {
      setActiveModalKey(key);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const conteudoAtual = conteudoModais[activeModalKey] || [];

  return (
    <>
      <div className={styles.pageWrapper}>
        <main className={styles.container}>

          {/* --- 1. Seção Hero --- */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Tecnólogo em Análise e Desenvolvimento de Sistemas</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className={styles.heroImageWrapper}>
              <img src={heroImage} alt="Imagem principal" /> 
            </div>
          </section>

          {/* --- 2. Seção de Botões --- */}
          <section className={styles.quickNav}>
            <div className={styles.buttonGrid}>
              <button className={styles.navButton} onClick={() => openModal('Inscrições & Admissão')}>Inscrições & Admissão</button>
              <button className={styles.navButton} onClick={() => openModal('Acadêmico')}>Acadêmico</button>
              <button className={styles.navButton} onClick={() => openModal('Plataformas & Ferramentas')}>Plataformas & Ferramentas</button>
              <button className={styles.navButton} onClick={() => openModal('Apoio & Oportunidades')}>Apoio & Oportunidades</button>
              <button className={styles.navButton} onClick={() => openModal('Documentação & Regulamentos')}>Documentação & Regulamentos</button>
              <button className={styles.navButton} onClick={() => openModal('Galeria')}>Galeria</button>
            </div>
          </section>
          
          {/* --- 3. Seção de Projetos --- */}
          <section className={styles.projects}>
            <h2>Confira os projetos do TADS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <div className={styles.filters}>
              <select name="ano">
                <option value="">Selecione o ano</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
              <select name="disciplina">
                <option value="">Selecione a disciplina</option>
                <option value="psc">Projeto de Sistemas Computacionais</option>
                <option value="cs1">Computação e Sociedade</option>
              </select>
              <select name="tipo">
                <option value="">Selecione o tipo</option>
                <option value="tcc">TCC</option>
                <option value="pi">Projeto Integrador</option>
              </select>
              <button className={styles.filterButton}>Filtrar</button>
            </div>

            <div className={styles.projectList}>
              <article className={styles.projectCard}>
                <img src={projectImg1} alt="Código" />
                <div className={styles.projectInfo}>
                  <h3>Título do Projeto: Subtítulo</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
                </div>
              </article>
              <article className={styles.projectCard}>
                <img src={projectImg2} alt="Mobile" />
                <div className={styles.projectInfo}>
                  <h3>Título do Projeto: Subtítulo</h3>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                  <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
                </div>
              </article>
              <article className={styles.projectCard}>
                <img src={projectImg3} alt="Dashboard" />
                <div className={styles.projectInfo}>
                  <h3>Título do Projeto: Subtítulo</h3>
                  <p>Excepteur sint occaecat cupidatat non proident.</p>
                  <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>

      {/* --- Modal Fly-out Dinâmico --- */}
      <div 
        className={`${styles.modalOverlay} ${isModalOpen ? styles.active : ''}`}
        onClick={handleOverlayClick}
      >
        <div 
          className={`${styles.flyoutMenu} ${isModalOpen ? styles.activeMenu : ''}`} 
        >
          <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          
          <h2>{activeModalKey}</h2>
          
          {conteudoAtual.map((secao, index) => (
            <div key={index} className={styles.menuSection}>
              <h3>{secao.titulo}</h3>
              <div className={styles.menuLinks}>
                {secao.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#">{link}</a>
                ))}
              </div>
            </div>
          ))}

          {conteudoAtual.length === 0 && (
            <p style={{color: '#fff', opacity: 0.7}}>Em breve...</p>
          )}

        </div>
      </div>
    </>
  );
}