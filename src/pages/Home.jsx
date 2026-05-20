import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ vagas }) {
  // Pegar as 3 vagas mais recentes (simulação)
  const vagasRecentes = vagas.slice(0, 3);

  return (
    <div>
      <div className="home-hero">
        <span className="badge badge-purple" style={{ marginBottom: '16px' }}>🚀 A plataforma de estágios mais top do Brasil!</span>
        <h1>Seu primeiro <span>estágio</span> dos <span className="coral">sonhos</span> começa aqui 🌟</h1>
        <p>Conectamos estudantes talentosos às melhores empresas do Brasil. Milhares de vagas em todas as áreas. 💪</p>
        
        {/* Placeholder for the search bar mentioned to be skipped */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Popular:</span>
          <span className="badge badge-gray">Dev</span>
          <span className="badge badge-gray">Design</span>
          <span className="badge badge-gray">Marketing</span>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card purple">
          <h3>2.500+</h3>
          <p>Vagas Ativas</p>
        </div>
        <div className="stat-card orange">
          <h3>800+</h3>
          <p>Empresas</p>
        </div>
        <div className="stat-card pink">
          <h3>50K+</h3>
          <p>Estudantes</p>
        </div>
        <div className="stat-card blue">
          <h3>12K+</h3>
          <p>Contratações</p>
        </div>
      </div>

      <div className="section-title">
        <h2>Explore por área 📁</h2>
        <p>Encontre estágios na área que combina com você</p>
      </div>

      <div className="categories-grid">
        <div className="category-card" style={{color: '#8b5cf6', borderColor: '#f3e8ff', backgroundColor: '#faf5ff'}}>💻 Tecnologia</div>
        <div className="category-card" style={{color: '#ec4899', borderColor: '#fce7f3', backgroundColor: '#fdf2f8'}}>🎨 Design</div>
        <div className="category-card" style={{color: '#ea580c', borderColor: '#ffedd5', backgroundColor: '#fff7ed'}}>📣 Marketing</div>
        <div className="category-card" style={{color: '#059669', borderColor: '#d1fae5', backgroundColor: '#ecfdf5'}}>💰 Financeiro</div>
        <div className="category-card" style={{color: '#dc2626', borderColor: '#fee2e2', backgroundColor: '#fef2f2'}}>🏥 Saúde</div>
        <div className="category-card" style={{color: '#2563eb', borderColor: '#dbeafe', backgroundColor: '#eff6ff'}}>📚 Educação</div>
        <div className="category-card" style={{color: '#7c3aed', borderColor: '#ede9fe', backgroundColor: '#f5f3ff'}}>⚙️ Engenharia</div>
        <div className="category-card" style={{color: '#d97706', borderColor: '#fef3c7', backgroundColor: '#fffbeb'}}>🤝 RH</div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '24px' }}>Vagas recentes 🔥</h2>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>As oportunidades mais novas do mercado</p>
        </div>
        <Link to="/vagas" className="btn-primary" style={{ padding: '8px 16px' }}>Ver todas →</Link>
      </div>

      <div className="recent-jobs">
        {vagasRecentes.map(vaga => (
          <div key={vaga.id} className="job-card">
            <div className="job-icon">🏢</div>
            <div className="job-details">
              <h3 className="job-title">{vaga.titulo}</h3>
              <p className="job-company">{vaga.empresaId ? 'Empresa parceira' : 'Empresa não listada'}</p>
              
              <div className="job-meta">
                <span>📍 {vaga.localizacao || 'Brasil'}</span>
                <span>💰 {vaga.bolsa || 'A combinar'}</span>
                <span>🕒 14 mai</span>
              </div>
              
              <div className="job-badges">
                <span className="badge badge-purple">{vaga.tipo || 'CLT'}</span>
                <span className="badge badge-orange">{vaga.modalidade || 'Presencial'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
