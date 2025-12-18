"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

interface Event {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  publico: string;
  data: string;
  hora: string;
  local: string;
  link: string;
}

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      titulo: "CODA",
      descricao: "Evento que reuniu desenvolvedores e entusiastas para criar soluções inovadoras em tecnologia. Durante o encontro, equipes colaboraram em projetos que exploraram novas formas de aplicar a tecnologia em problemas do mundo real.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "2025-10-15",
      hora: "09:00",
      local: "Auditório Central - Campus I",
      
      link: "https://l1nk.dev/jornada-academica-ifsul-sapucaia",
    },
    {
      id: 2,
      titulo: "Evento",
      descricao: "A Jornada Acadêmica Integrada ADS e TDS é um evento promovido no campus Sapucaia do Sul do IFSul e que abrange palestras, oficinas e minicursos destinados aos discentes dos cursos Técnico em Desenvolvimento de Sistemas e Tecnólogo em Análise e Desenvolvimento de Sistemas, bem como à comunidade acadêmica em geral.",
      imagem: "/imagensIfsul/6.JPG",
      publico: "Externo",
      data: "2025-09-08",
      hora: "14:00",
      local: "Auditório - IFSul Campus Sapucaia do Sul",
      link: "https://l1nk.dev/jornada-academica-ifsul-sapucaia",
    },
    {
      id: 3,
      titulo: "Integração ADS",
      descricao:
        "No dia 21 de agosto de 2025, aconteceu a integração do segundo semestre de 2025, reunindo estudantes e professores do curso de Análise e Desenvolvimento de Sistemas do campus Sapucaia do Sul.",
      imagem: "/imagensIfsul/13.JPG",
      publico: "Interno",
      data: "2025-02-21",
      hora: "19:00",
      local: "IFSul Campus Sapucaia do Sul - Casa Lazer",
      link: "https://l1nk.dev/confra-ads-ifsul",
    },
    {
      id: 4,
      titulo: "Visita Técnica SAP",
      descricao:
        "No dia 03 de abril de 2025, ocorreu a visita técnica dos alunos do IFSUL, dos cursos de TADS e TDS, do campus Sapucaia do Sul, à SAP, em São Leopoldo.",
      imagem: "/imagensIfsul/16.jpg",
      publico: "Interno",
      data: "2025-02-21",
      hora: "19:00",
      local: "SAP Labs Latin America",
      link: "https://acesse.one/visita-sap-ads-ifsul",
    },
    {
      id: 5,
      titulo: "Projeto de Extensão ADS | 2025/1",
      descricao:
        "Extensão: Disciplina do curso de Análise e Desenvolvimento de Sistemas realizou, no dia 24 de junho de 2025, um workshop voltado ao auxílio na criação de currículos para alunos do EJA. Confira as fotos no link.",
      imagem: "/imagensIfsul/2.jpg",
      publico: "Interno",
      data: "2025-02-21",
      hora: "19:00",
      local: "IFSul Campus Sapucaia do Sul",
      link: "https://l1nk.dev/projeto-extensao-ifsul",
    },
    {
      id: 6,
      titulo: "Disciplina Projeto de Sistemas Computacionais 2025/2",
      descricao:
        "Ao longo do semestre, os alunos da turma 3A participaram da disciplina Projeto de Sistemas Computacionais, na qual desenvolveram uma aplicação completa utilizando a metodologia ágil. O trabalho integrou conceitos de projeto de sistemas, programação orientada a objetos em Java e banco de dados, em um ambiente interdisciplinar que simula o ciclo de desenvolvimento de software em equipe. Confira alguns registros da turma ao longo do semestre.",
      imagem: "/logos/Logo5.png",
      publico: "Interno",
      data: "2025-02-21",
      hora: "19:00",
      local: "IFSul Campus Sapucaia do Sul ",
      link: "https://l1nk.dev/turma-3A",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [publico, setPublico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [link, setLink] = useState("");
  const [imagemPreview, setImagemPreview] = useState<string | null>(null);
  const [imagemArquivo, setImagemArquivo] = useState<File | null>(null);

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImagemArquivo(file);
      setImagemPreview(URL.createObjectURL(file));
    }
  }

  function salvarNovoEvento() {
    if (!titulo.trim() || !data || !hora) return;

    const novoEvento: Event = {
      id: Date.now(),
      titulo,
      descricao,
      publico,
      data,
      hora,
      local,
      link,
      imagem: imagemPreview ?? "/images/image.jpg",
      link: ""
    };

    setEvents([...events, novoEvento]);

    setTitulo("");
    setDescricao("");
    setPublico("");
    setData("");
    setHora("");
    setLocal("");
    setLink("");
    setImagemPreview(null);
    setImagemArquivo(null);

    setCreateModalOpen(false);
  }

  function formatarDataISO(iso: string) {
    return new Date(iso).toLocaleDateString("pt-BR");
  }

  const eventosFiltrados = events.filter((event) =>
    event.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.eventsContainer}>
      <h2>Notícias e Eventos</h2>

      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="PESQUISAR EVENTOS"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.eventsgrid}>
        {eventosFiltrados.map((event) => (
          <div className={styles.eventcard} key={event.id}>
            <img src={event.imagem} alt={event.titulo} />

            <div className={styles.tag}>{event.publico}</div>

            <div className={styles.cardoverlay}>
              <h3>{event.titulo}</h3>
              <p>{event.descricao}</p>

              <div className={styles.infobox}>
                <p>📅 {formatarDataISO(event.data)}</p>
                <p>🕒 {event.hora}</p>
                <p>📍 {event.local}</p>
              </div>

              <button
                className={styles.btnvermais}
                onClick={() => setSelectedEvent(event)}
              >
                VER MAIS
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.addEventContainer}>
        <button
          className={styles.addEventBtn}
          onClick={() => setCreateModalOpen(true)}
        >
          + Adicionar Evento
        </button>
      </div>

      {selectedEvent && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <img
              src={selectedEvent.imagem}
              alt={selectedEvent.titulo}
              className={styles.modalImage}
            />
            <h3 className={styles.modalTitle}>{selectedEvent.titulo}</h3>
            <p className={styles.modalDescricao}>
              {selectedEvent.descricao}
            </p>

            <div className={styles.modalDetails}>
              <p>📅 {formatarDataISO(selectedEvent.data)}</p>
              <p>🕒 {selectedEvent.hora}</p>
              <p>📍 {selectedEvent.local}</p>
              <p>👥 {selectedEvent.publico}</p>
              <p>
                📸
                <a
                  href={selectedEvent.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {selectedEvent.link}
                </a>
              </p>
            </div>

            <button
              className={styles.modalClose}
              onClick={() => setSelectedEvent(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {createModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Criar Novo Evento</h2>

            <input
              className={styles.input}
              placeholder="Título"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <textarea
              className={styles.textarea}
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Público"
              value={publico}
              onChange={(e) => setPublico(e.target.value)}
            />

            <input
              type="date"
              className={styles.input}
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <input
              type="time"
              className={styles.input}
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            />

            <input
              className={styles.input}
              placeholder="Local"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />

            <input
              className={styles.fileInput}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />

            {imagemPreview && (
              <img
                src={imagemPreview}
                className={styles.previewImage}
              />
            )}

            <button
              className={styles.saveBtn}
              onClick={salvarNovoEvento}
            >
              Salvar Evento
            </button>

            <button
              className={styles.modalClose}
              onClick={() => setCreateModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsList;
function setLink(arg0: string) {
  throw new Error("Function not implemented.");
}

