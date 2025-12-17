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
}

const EventsList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: 1,
      titulo: "CODA",
      descricao:
        "Evento que reuniu desenvolvedores e entusiastas para criar soluções inovadoras em tecnologia.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "2025-10-15",
      hora: "09:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 2,
      titulo: "Codigo Aberto",
      descricao:
        "Teste 1",
      imagem: "/images/image.jpg",
      publico: "Externo",
      data: "2025-11-20",
      hora: "14:00",
      local: "Bloco B",
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
    };

    setEvents([...events, novoEvento]);

    setTitulo("");
    setDescricao("");
    setPublico("");
    setData("");
    setHora("");
    setLocal("");
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
