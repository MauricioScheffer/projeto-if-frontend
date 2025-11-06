"use client"; 

import { useState } from 'react';
import styles from './page.module.css'; // <-- Importa os estilos

// String das imagens
const heroImage = '/img/IMG_0538.jpg';
const projectImg1 = '/img/placeholder-code.jpg';
const projectImg2 = '/img/placeholder-mobile.jpg';
const projectImg3 = '/img/placeholder-dash.jpg';


// padrão para páginas
export default function HomePage() {
  
  // --- Lógica do Modal ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const openModal = (title: string) => {
    if (isModalOpen && modalTitle === title) {
      setIsModalOpen(false);
    } else {
      setModalTitle(title);
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
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
            <select name="disciplina">
              <option value="">Selecione a disciplina</option>
              <option value="psc">Projeto de Sistemas Computacionais</option>
              <option value="cs1">Computação e Sociedade I</option>
              <option value="cs2">Computação e Sociedade II</option>
              <option value="mc">Metodologia Cientifica</option>
            </select>
            <select name="tipo">
              <option value="">Selecione o tipo</option>
              <option value="tcc">TCC</option>
              <option value="pi">Projeto Integrador</option>
              <option value="extensao">Extensão</option>
              <option value="pesquisa">Pesquisa</option>
            </select>
            <button className={styles.filterButton}>Filtrar</button>
          </div>

          <div className={styles.projectList}>
            <article className={styles.projectCard}>
              <img src={projectImg1} alt="img proj 1" />
              <div className={styles.projectInfo}>
                <h3>Título: Subtítulo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
              </div>
            </article>
            <article className={styles.projectCard}>
              <img src={projectImg2} alt="img proj 2" />
              <div className={styles.projectInfo}>
                <h3>Título: Subtítulo: Desenvolvimento Mobile Nativo</h3>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident.</p>
                <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
              </div>
            </article>
            <article className={styles.projectCard}>
              <img src={projectImg3} alt="img proj 3" />
              <div className={styles.projectInfo}>
                <h3>Título: Subtítulo</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <a href="#" className={styles.projectLink}>Ver projeto &rarr;</a>
              </div>
            </article>
          </div>
        </section>
      </main>
      </div>

      {/* --- Modal Fly-out (Renderização Condicional) --- */}
      <div 
        className={`${styles.modalOverlay} ${isModalOpen ? styles.active : ''}`}
        onClick={handleOverlayClick}
      >
        <div 
          className={`${styles.flyoutMenu} ${isModalOpen ? styles.activeMenu : ''}`} 
          id="modal-academico" 
        >
          
          <button className={styles.modalClose} onClick={closeModal}>&times;</button>
          
          <h2>{modalTitle}</h2>
          
          <div className={styles.menuSection}>
            <h3>TDS - Técnico</h3>
            <div className={styles.menuLinks}>
              <a href="#">Grade Curricular</a>
              <a href="#">Emendas</a>
              <a href="#">Horários</a>
            </div>
          </div>
          <div className={styles.menuSection}>
            <h3>TADS - Tecnólogo</h3>
            <div className={styles.menuLinks}>
              <a href="#">Grade Curricular</a>
              <a href="#">Emendas</a>
              <a href="#">Horários</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}