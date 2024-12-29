import React from "react";
import NavbarComponent from "./components/NavbarComponent";
import AgendaPage from "./pages/AgendaPage";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import AddContactPage from "./pages/AddContactPage";

function App() {
  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/agenda/:slug" element={<ContactPage />} />
          <Route path="/add-contact" element={<AddContactPage />} />
        </Routes>
    </>
  );
}

export default App;

