import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AgendaPage() {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas")
      .then((response) => response.json())
      .then((data) => setAgendas(data.agendas))
      .catch((error) => console.error("Error fetching agendas:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Agendas</h1>
      <ul>
        {agendas.map((agenda) => (
          <li key={agenda.slug}>
            <Link to={`/agenda/${agenda.slug}`}>{agenda.slug}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add-contact">Agregar Contacto</Link>
    </div>
  );
}

export default AgendaPage;
