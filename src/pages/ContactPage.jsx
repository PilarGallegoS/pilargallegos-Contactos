import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ContactPage() {
  const { slug } = useParams(); 
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch(`https://playground.4geeks.com/contact/agendas/${slug}`)
      .then((response) => response.json())
      .then((data) => setContacts(data.contacts))
      .catch((error) => console.error("Error fetching contacts:", error));
  }, [slug]);

  return (
    <div>
      <h1>Contactos de la Agenda: {slug}</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.slug} - {contact.email}
          </li>
        ))}
      </ul>
      <Link to="/agenda">Volver a Agendas</Link>
    </div>
  );
}

export default ContactPage;
