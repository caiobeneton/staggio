import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Estilização simples

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">
          <img src="/imagens/logo-sistema.png" alt="Logotipo do Sistema" width="150" />
        </Link>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/vagas">Vagas</Link></li>
          <li><Link to="/empresas">Empresas</Link></li>
          <li><Link to="/candidatos">Candidatos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
