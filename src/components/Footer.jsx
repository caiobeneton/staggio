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
        <div className="footer-links" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/">Início 🏠</Link>
          <Link to="/vagas">Estágios 🎓</Link>
          <Link to="/empresas">Empresas 🏢</Link>
          <Link to="/minha-area">Minha Área ⭐</Link>
          <Link to="/candidatos">Alunos 👥</Link>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Staggi 🚀 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
