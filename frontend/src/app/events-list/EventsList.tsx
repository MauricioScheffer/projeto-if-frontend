"use client";
import React from "react";
import styles from  "./page.module.css";

const EventsList: React.FC = () => {
  const events = [
    {
      id: 1,
      publico: "Público Interno",
      titulo: "CODA",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "./image.jpg",
    },
    {
      id: 2,
      publico: "Público Interno",
      titulo: "Nome do evento",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "/image.jpg",
    },
    {
      id: 3,
      publico: "Público Externo",
      titulo: "Nome do evento",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "/image.jpg",
    },
    {
      id: 4,
      publico: "Público Interno",
      titulo: "Nome do evento",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "/image.jpg",
    },
    {
      id: 5,
      publico: "Público Interno",
      titulo: "Nome do evento",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "/evento.jpg",
    },
    {
      id: 6,
      publico: "Público Interno",
      titulo: "Nome do evento",
      descricao: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
      imagem: "/evento.jpg",
    },
  ];

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
              <button className={styles.btnvermais}>VER MAIS</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
