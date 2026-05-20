import React, { useState } from 'react';

function Empresas({ empresas }) {
  const [activeTab, setActiveTab] = useState('favoritos');

  // Dados mockados para simular favoritos baseados nas empresas existentes
  const favoritosMock = [
    {
      id: 101,
      titulo: 'Engenheiro de Dados',
      empresa: 'DataFlow Solutions - Curitiba, PR',
      tipo: 'CLT',
      modalidade: 'Presencial'
    }
  ];

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ marginBottom: '8px' }}>Minha área 👤</h1>
        <p style={{ color: 'var(--text-muted)' }}>Gerencie seus favoritos e candidaturas</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)', padding: '24px', borderRadius: 'var(--radius-lg)', color: 'white', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontSize: '36px', margin: '0 0 8px 0' }}>1</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>Favoritos</p>
        </div>
        <div style={{ background: 'linear-gradient(135deg, #fb923c, #c2410c)', padding: '24px', borderRadius: 'var(--radius-lg)', color: 'white', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ fontSize: '36px', margin: '0 0 8px 0' }}>0</h2>
          <p style={{ margin: 0, opacity: 0.9 }}>Candidaturas</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', background: 'white', padding: '10px', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }}>
        <button 
          onClick={() => setActiveTab('favoritos')}
          style={{ flex: 1, padding: '12px', border: 'none', borderRadius: 'var(--radius-xl)', fontWeight: 600, cursor: 'pointer', transition: '0.2s', background: activeTab === 'favoritos' ? 'linear-gradient(90deg, #a855f7, #fb923c)' : 'transparent', color: activeTab === 'favoritos' ? 'white' : 'var(--text-muted)' }}
        >
          ❤️ Favoritos
        </button>
        <button 
          onClick={() => setActiveTab('candidaturas')}
          style={{ flex: 1, padding: '12px', border: 'none', borderRadius: 'var(--radius-xl)', fontWeight: 600, cursor: 'pointer', transition: '0.2s', background: activeTab === 'candidaturas' ? 'linear-gradient(90deg, #a855f7, #fb923c)' : 'transparent', color: activeTab === 'candidaturas' ? 'white' : 'var(--text-muted)' }}
        >
          💼 Candidaturas <span style={{ background: '#f3e8ff', color: '#7e22ce', padding: '2px 8px', borderRadius: '10px', fontSize: '12px', marginLeft: '8px' }}>0</span>
        </button>
      </div>

      {activeTab === 'favoritos' ? (
        <div className="recent-jobs">
          {favoritosMock.map(fav => (
            <div key={fav.id} className="job-card" style={{ padding: '16px 20px' }}>
              <div className="job-icon" style={{ width: '40px', height: '40px', fontSize: '20px' }}>🏢</div>
              <div className="job-details">
                <h3 className="job-title" style={{ fontSize: '16px' }}>{fav.titulo}</h3>
                <p className="job-company" style={{ fontSize: '13px', marginBottom: '8px' }}>{fav.empresa}</p>
                <div className="job-badges">
                  <span className="badge badge-purple">{fav.tipo}</span>
                  <span className="badge badge-orange">{fav.modalidade}</span>
                </div>
              </div>
              <div className="job-actions">
                <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px' }}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)' }}>
          Você ainda não se candidatou a nenhuma vaga.
        </div>
      )}
    </div>
  );
}

export default Empresas;
