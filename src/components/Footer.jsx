import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} - Sistema de Vagas (Trabalho Acadêmico)</p>
    </footer>
  );
}

export default Footer;
