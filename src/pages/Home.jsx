import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home({ vagas, empresas, candidatos, candidaturas }) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  // Filtra as vagas se tiver categoria selecionada, senão pega as recentes
  const vagasParaExibir = categoriaSelecionada 
    ? vagas.filter(v => v.categoria === categoriaSelecionada)
    : vagas.slice(0, 3); // Se não houver categoria, mostra as 3 mais recentes

  const toggleCategoria = (cat) => {
    if (categoriaSelecionada === cat) {
      setCategoriaSelecionada(null); // desmarca
    } else {
      setCategoriaSelecionada(cat);
    }
  };

  const categorias = [
    { nome: 'Tecnologia', icone: '💻', cor: '#8b5cf6', bg: '#faf5ff', border: '#f3e8ff' },
    { nome: 'Design', icone: '🎨', cor: '#ec4899', bg: '#fdf2f8', border: '#fce7f3' },
    { nome: 'Marketing', icone: '📣', cor: '#ea580c', bg: '#fff7ed', border: '#ffedd5' },
    { nome: 'Financeiro', icone: '💰', cor: '#059669', bg: '#ecfdf5', border: '#d1fae5' },
    { nome: 'Saúde', icone: '🏥', cor: '#dc2626', bg: '#fef2f2', border: '#fee2e2' },
    { nome: 'Educação', icone: '📚', cor: '#2563eb', bg: '#eff6ff', border: '#dbeafe' },
    { nome: 'Engenharia', icone: '⚙️', cor: '#7c3aed', bg: '#f5f3ff', border: '#ede9fe' },
    { nome: 'RH', icone: '🤝', cor: '#d97706', bg: '#fffbeb', border: '#fef3c7' }
  ];

  return (
    <div>
      <div className="home-hero">
        <span className="badge badge-purple" style={{ marginBottom: '16px' }}>🚀 A plataforma de estágios mais top do Brasil!</span>
        <h1>Seu primeiro <span>estágio</span> dos <span className="coral">sonhos</span> começa aqui 🌟</h1>
        <p>Conectamos estudantes talentosos às melhores empresas do Brasil. Milhares de vagas em todas as áreas. 💪</p>
        
        {/* Placeholder for the search bar mentioned to be skipped */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Popular:</span>
          <span className="badge badge-gray" style={{cursor: 'pointer'}} onClick={() => toggleCategoria('Tecnologia')}>Dev</span>
          <span className="badge badge-gray" style={{cursor: 'pointer'}} onClick={() => toggleCategoria('Design')}>Design</span>
          <span className="badge badge-gray" style={{cursor: 'pointer'}} onClick={() => toggleCategoria('Marketing')}>Marketing</span>
        </div>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card purple">
          <h3>{vagas ? vagas.length : 0}</h3>
          <p>Vagas Ativas</p>
        </div>
        <div className="stat-card orange">
          <h3>{empresas ? empresas.length : 0}</h3>
          <p>Empresas</p>
        </div>
        <div className="stat-card pink">
          <h3>{candidatos ? candidatos.length : 0}</h3>
          <p>Estudantes</p>
        </div>
        <div className="stat-card blue">
          <h3>{candidaturas ? candidaturas.length : 0}</h3>
          <p>Contratações</p>
        </div>
      </div>

      <div className="section-title">
        <h2>Explore por área 📁</h2>
        <p>Encontre estágios na área que combina com você</p>
      </div>

      <div className="categories-grid">
        {categorias.map(cat => (
          <div 
            key={cat.nome}
            className="category-card" 
            style={{
              color: cat.cor, 
              backgroundColor: cat.bg,
              borderColor: categoriaSelecionada === cat.nome ? cat.cor : cat.border,
              boxShadow: categoriaSelecionada === cat.nome ? 'var(--shadow-md)' : 'none',
              transform: categoriaSelecionada === cat.nome ? 'translateY(-2px)' : 'none'
            }}
            onClick={() => toggleCategoria(cat.nome)}
          >
            {cat.icone} {cat.nome}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '24px' }}>
            {categoriaSelecionada ? `Vagas em ${categoriaSelecionada} 🎯` : 'Vagas recentes 🔥'}
          </h2>
          <p style={{ margin: '4px 0 0', color: 'var(--text-muted)' }}>
            {categoriaSelecionada ? `${vagasParaExibir.length} oportunidade(s) encontrada(s)` : 'As oportunidades mais novas do mercado'}
          </p>
        </div>
        <Link to="/vagas" className="btn-primary" style={{ padding: '8px 16px' }}>Ver todas →</Link>
      </div>

      <div className="recent-jobs">
        {vagasParaExibir.length > 0 ? (
          vagasParaExibir.map(vaga => (
            <div key={vaga.id} className="job-card">
              <div className="job-icon">🏢</div>
              <div className="job-details">
                <h3 className="job-title">{vaga.titulo}</h3>
                <p className="job-company">{vaga.empresaId ? 'Empresa parceira' : 'Empresa parceira'}</p>
                
                <div className="job-meta">
                  <span>📍 {vaga.localizacao || 'Brasil'}</span>
                  <span>💰 {vaga.bolsa || 'A combinar'}</span>
                  <span>🕒 14 mai</span>
                </div>
                
                <div className="job-badges">
                  <span className="badge badge-purple">{vaga.tipo || 'CLT'}</span>
                  <span className="badge badge-orange">{vaga.modalidade || 'Presencial'}</span>
                  {vaga.categoria && <span className="badge badge-gray">{vaga.categoria}</span>}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)' }}>
            Nenhuma vaga encontrada para esta categoria no momento.
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
