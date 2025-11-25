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
        "Evento que reuniu desenvolvedores e entusiastas para criar soluções inovadoras em tecnologia. Durante o encontro, equipes colaboraram em projetos que exploraram novas formas de aplicar a tecnologia em problemas do mundo real.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "2025-10-15",
      hora: "09:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 2,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra lacus non lectus fringilla, in maximus erat congue.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "2025-10-15",
      hora: "09:00",
      local: "Auditório Central - Campus I",
    },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [createModalOpen, setCreateModalOpen] = useState(false);
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
    if (!titulo.trim()) {
      alert("O título é obrigatório");
      return;
    }
    if (!data) {
      alert("A data é obrigatória");
      return;
    }
    if (!hora) {
      alert("O horário é obrigatório");
      return;
    }

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
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("pt-BR");
  }

  return (
    <div className={styles.eventsContainer}>
      <h2>Notícias e Eventos</h2>

      <div className={styles.searchbar}>
        <input type="text" placeholder="PESQUISAR EVENTOS" />
      </div>

      <div className={styles.eventsgrid}>
        {events.map((event) => (
          <div className={styles.eventcard} key={event.id}>
            <img src={event.imagem} alt={event.titulo} />
            <div className={styles.cardoverlay}>
              {/* REMOVIDO PUBLICO */}
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
            <p className={styles.modalDescricao}>{selectedEvent.descricao}</p>

            <div className={styles.modalDetails}>
              <p>
                <strong>📅 Data:</strong> {formatarDataISO(selectedEvent.data)}
              </p>
              <p>
                <strong>🕒 Horário:</strong> {selectedEvent.hora}
              </p>
              <p>
                <strong>📍 Local:</strong> {selectedEvent.local}
              </p>
              <p>
                <strong>👥 Público:</strong> {selectedEvent.publico}
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
            <h2 style={{ marginBottom: "15px" }}>Criar Novo Evento</h2>

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
              <img src={imagemPreview} className={styles.previewImage} />
            )}

            <button className={styles.saveBtn} onClick={salvarNovoEvento}>
              Salvar Evento
            </button>

            <button
              className={styles.modalClose}
              onClick={() => setCreateModalOpen(false)}
              style={{ marginTop: "10px" }}
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
