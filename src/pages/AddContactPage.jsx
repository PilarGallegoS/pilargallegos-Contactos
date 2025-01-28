import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddContactPage() {
  const [contact, setContact] = useState({ slug: "", email: "", otherDetail: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://playground.4geeks.com/contact/agendas/${contact.slug}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/agenda"); 
      })
      .catch((error) => console.error("Error saving contact:", error));
  };

  return (
    <div>
      <h1>Agregar Contacto</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="slug" value={contact.slug} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={contact.email} onChange={handleChange} />
        </label>
        <label>
          Otro Detalle:
          <input type="text" name="otherDetail" value={contact.otherDetail} onChange={handleChange} />
        </label>
        <button type="submit">Guardar Contacto</button>
      </form>
    </div>
  );
}

export default AddContactPage;
