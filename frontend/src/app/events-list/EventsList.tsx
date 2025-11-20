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
  const events: Event[] = [
    {
      id: 1,
      titulo: "CODA",
      descricao:
        "Evento que reuniu desenvolvedores e entusiastas para criar soluções inovadoras em tecnologia. Durante o encontro, equipes colaboraram em projetos que exploraram novas formas de aplicar a tecnologia em problemas do mundo real.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 2,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra lacus non lectus fringilla, in maximus erat congue.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 3,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget sem sit amet sapien viverra volutpat.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 4,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus sapien non metus suscipit, et egestas justo fermentum.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 5,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo risus a massa blandit, a posuere sapien aliquam.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
    {
      id: 6,
      titulo: "Evento",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed facilisis risus, ut malesuada urna.",
      imagem: "/images/image.jpg",
      publico: "Interno (Acadêmico)",
      data: "15 de Outubro de 2025",
      hora: "09:00 - 18:00",
      local: "Auditório Central - Campus I",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

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
              <span className={styles.tag}>{event.publico}</span>
              <h3>{event.titulo}</h3>
              <p>{event.descricao}</p>

              <div className={styles.infobox}>
                <p>📅 {event.data}</p>
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
              <p><strong>📅 Data:</strong> {selectedEvent.data}</p>
              <p><strong>🕒 Horário:</strong> {selectedEvent.hora}</p>
              <p><strong>📍 Local:</strong> {selectedEvent.local}</p>
              <p><strong>👥 Público:</strong> {selectedEvent.publico}</p>
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
    </div>
  );
};

export default EventsList;
