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
      titulo: "IF CODE",
      descricao:
        "O IFCode é um evento promovido pelo IFSul Sapucaia do Sul que busca incentivar e proporcionar aos alunos o desenvolvimento de habilidades de programação e criatividade. O evento atual consistirá no desenvolvimento da modalidades Hackathon, a qual é uma atividade de programação em regime intensivo onde as equipes combinam habilidades de programação, prototipagem, criatividade e colaboração para desenvolver soluções tecnológicas para um dado tema.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "2025-09-13",
      hora: "18:00",
      local: "IFSul Campus Sapucaia do Sul",
      link: "https://l1nk.dev/ifcode2025",
    },
    {
      id: 2,
      titulo: "Jornada Acadêmica 2025",
      descricao:
        "A Jornada Acadêmica Integrada ADS e TDS é um evento promovido no campus Sapucaia do Sul do IFSul e que abrange palestras, oficinas e minicursos destinados aos discentes dos cursos Técnico em Desenvolvimento de Sistemas e Tecnólogo em Análise e Desenvolvimento de Sistemas, bem como à comunidade acadêmica em geral.",
      imagem: "/images/image.jpg",
      publico: "Externo",
      data: "2025-09-08",
      hora: "14:00",
      local: "Auditório - IFSul Campus Sapucaia do Sul",
      link: "https://l1nk.dev/jornada-academica-ifsul-sapucaia",
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

