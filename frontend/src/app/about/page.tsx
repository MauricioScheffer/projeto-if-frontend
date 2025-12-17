"use client";

import { useState } from 'react';
import styles from './page.module.css';

// --- CONFIGURAÇÃO DAS IMAGENS ---
const heroImage = '/images/image.jpg'; 
const tdsImage = '/images/image.jpg';  


type LinkItem = { nome: string; url: string };
type SecaoModal = { titulo: string; links: LinkItem[] };

// --- CONTEÚDO DOS MODAIS ---
const conteudoModais: Record<string, SecaoModal[]> = {
  "Inscrições & Admissão": [
    {
      titulo: "Processo Seletivo",
      links: [
        { nome: "Edital Vigente", url: "https://processoseletivo.ifsul.edu.br" },
      ]
    },
    {
      titulo: "Matrículas",
      links: [
        { nome: "Resultado Final", url: "https://processoseletivo.ifsul.edu.br" }
      ]
    }
  ],
  "Acadêmico": [
    {
      titulo: "TDS - Técnico",
      links: [
        { nome: "Documentação", url: "https://intranet.ifsul.edu.br/catalogo/curso/328" },
      ]
    },
    {
      titulo: "TADS - Tecnólogo",
      links: [
        { nome: "Documentação", url: "https://intranet.ifsul.edu.br/catalogo/curso/331" },
      ]
    }
  ],
  "Plataformas & Ferramentas": [
    {
      titulo: "Sistemas",
      links: [
        { nome: "Moodle", url: "https://apnp.ifsul.edu.br/login/index.php" },
        { nome: "SUAP", url: "https://suap.ifsul.edu.br" },
        { nome: "Biblioteca Virtual", url: "https://biblioteca.ifsul.edu.br" }
      ]
    },
    {
      titulo: "Comunidade",
      links: [
        { nome: "Discord", url: "https://discord.gg/QJWGMzYVA5" },
      ]
    }
  ],
  "Apoio & Oportunidades": [
    {
      titulo: "Assistência Estudantil",
      links: [
        { nome: "Solicitação de Auxílio", url: "https://suap.ifsul.edu.br" }
      ]
    },
    {  
      titulo: "Oportunidades",
      links: [
        { nome: "Monitorias", url: "https://docs.google.com/spreadsheets/d/1IZVEy4u3YC3V5PCAXgjzDjcJRz33UqjozGvinktk_nc/edit?gid=0#gid=0" },
        { nome: "Estágios", url: "https://www.sapucaia.ifsul.edu.br/estagio" }
      ]
    }
  ],
  "Documentação & Regulamentos": [
    {
      titulo: "Institucional",
      links: [
        { nome: "Regulamentos Institucionais", url: "https://www.sapucaia.ifsul.edu.br/regulamentos-institucionais" },
        { nome: "Calendários Acadêmicos", url: "https://www.sapucaia.ifsul.edu.br/calendarios" }
      ]
    },

    {
      titulo: "Formulários",
      links: [
        { nome: "Aproveitamento de Disciplinas", url: "https://www.sapucaia.ifsul.edu.br/editaisedocumentos/2024/itemlist/category/98-editaisedocs-2025" },
      ]
    }

  ],
  "Galeria": [
    {
      titulo: "Eventos",
      links: [
        { nome: "Semana Acadêmica", url: "/semana-academica" },
        { nome: "Hackathon", url: "/hackathon" },
        { nome: "Visitas Técnicas", url: "/visitas" }
      ]
    },
    {
      titulo: "Projetos",
      links: [
        { nome: "Extensão", url: "/extensao" },
        { nome: "TCCs Destaque", url: "/tcc" }
      ]
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

          {/* --- 1. Seção Hero TADS --- */}
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Tecnólogo em Análise e Desenvolvimento de Sistemas</h1>
              <p>O curso de Análise e Desenvolvimento de Sistemas do IFSul prepara profissionais para desenvolver e manter softwares, com foco em programação, bancos de dados e soluções tecnológicas.</p>
            </div>
            <div className={styles.heroImageWrapper}>
              <img src={heroImage} alt="Turma TADS" /> 
            </div>
          </section>

          {/* --- 2. Seção TDS --- */}
          <section className={styles.tdsSection}>
            <div className={styles.heroContent}>
                <h2>Técnico em Desenvolvimento de Sistemas</h2>
                <p>O curso Técnico em Desenvolvimento de Sistemas do IFSul capacita estudantes do ensino médio para criar e manter sistemas computacionais, desenvolvendo habilidades em lógica de programação, desenvolvimento de aplicações, bancos de dados e uso de tecnologias atuais.</p>
            </div>
            <div className={styles.heroImageWrapper}>
                <img src={tdsImage} alt="Turma TDS" />
            </div>
          </section>

          {/* --- 3. Seção de Botões --- */}
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

        </main>
      </div>

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
                  <a 
                    key={linkIndex} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  >
                    {link.nome}
                  </a>
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