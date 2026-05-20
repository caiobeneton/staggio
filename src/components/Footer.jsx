import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2 className="text-gradient" style={{ margin: 0, fontWeight: 800, fontSize: '18px' }}>Staggi</h2>
        </div>
        <div className="footer-links">
          <Link to="/vagas">Estágios 🎓</Link>
          <Link to="/empresas">Minha Área ⭐</Link>
          <Link to="/vagas/editar/novo" style={{ color: 'var(--secondary)' }}>Publicar 📢</Link>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Staggi 🚀 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
