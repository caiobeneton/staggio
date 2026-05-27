import React from 'react';
import { Link } from 'react-router-dom';

function Vagas({ vagas, setVagas, empresas, favoritos, toggleFavorito, candidatarSe, candidaturas }) {
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
        {vagas.length > 0 ? vagas.map(vaga => {
          const empresa = empresas.find(e => e.id === vaga.id_empresa);
          const empresaNome = empresa ? empresa.nome : 'Empresa parceira';
          const isFav = favoritos.includes(vaga.id);
          const jaCandidatado = candidaturas.some(c => c.id_vaga === vaga.id && c.id_candidato === 1);

          return (
            <div key={vaga.id} className="job-card">
              <div className="job-icon">🏢</div>
              <div className="job-details">
                <h3 className="job-title">{vaga.titulo}</h3>
                <p className="job-company">{empresaNome}</p>
                
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
              
              <div className="job-actions" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                 <button 
                   onClick={() => toggleFavorito(vaga.id)} 
                   style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', transition: '0.2s', padding: '4px' }}
                   title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                 >
                   {isFav ? '❤️' : '🤍'}
                 </button>
                 {jaCandidatado ? (
                   <span className="badge badge-green" style={{ fontSize: '12px' }}>✓ Candidatado</span>
                 ) : (
                   <button 
                     onClick={() => candidatarSe(vaga.id)} 
                     className="btn-primary" 
                     style={{ padding: '6px 12px', fontSize: '12px', whiteSpace: 'nowrap' }}
                   >
                     Candidatar-se
                   </button>
                 )}
                 <Link to={`/vagas/editar/${vaga.id}`} className="btn-secondary" style={{ padding: '6px 12px', fontSize: '13px', whiteSpace: 'nowrap' }}>
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
          );
        }) : (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)' }}>
            Nenhuma vaga cadastrada.
          </div>
        )}
      </div>
    </div>
  );
}

export default Vagas;
