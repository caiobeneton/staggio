import React from 'react';
import { Link } from 'react-router-dom';

function Vagas({ vagas, setVagas, empresas }) {
  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta vaga?')) {
      const vagasFiltradas = vagas.filter(vaga => vaga.id !== id);
      setVagas(vagasFiltradas);
      alert('Vaga excluída com sucesso!');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>Estágios disponíveis 🎓</h1>
        <p style={{ color: 'var(--text-muted)' }}>{vagas.length} vagas encontradas</p>
      </div>

      <div className="recent-jobs">
        {vagas.length > 0 ? vagas.map(vaga => (
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
            
            <div className="job-actions">
               <Link to={`/vagas/editar/${vaga.id}`} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '13px' }}>
                 Editar
               </Link>
               <button 
                 onClick={() => handleExcluir(vaga.id)} 
                 style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '6px' }}
                 title="Excluir"
               >
                 🗑️
               </button>
            </div>
          </div>
        )) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)' }}>
            Nenhuma vaga cadastrada.
          </div>
        )}
      </div>
    </div>
  );
}

export default Vagas;
