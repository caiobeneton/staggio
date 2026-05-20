import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="app-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h2 className="text-gradient" style={{ margin: 0, fontWeight: 800 }}>Staggi</h2>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li><Link to="/" className={isActive('/')}>Início 🏠</Link></li>
            <li><Link to="/vagas" className={isActive('/vagas')}>Estágios 🎓</Link></li>
            <li><Link to="/empresas" className={isActive('/empresas')}>Minha Área ⭐</Link></li>
            <li><Link to="/vagas/editar/novo" className={isActive('/vagas/editar/novo')}>Publicar 📢</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/vagas/editar/novo" className="btn-primary">
            + Nova Vaga
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
