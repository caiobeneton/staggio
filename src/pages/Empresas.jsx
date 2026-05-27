import React, { useState } from 'react';

const getEmpresaImagem = (id) => {
  if (id === 1) return '/imagens/empresa1.jpg';
  if (id === 2) return '/imagens/emrpesa2.jpg'; // Contorna o erro de digitação do arquivo físico
  if (id === 3) return '/imagens/empresa3.jpg';
  if (id === 4) return '/imagens/empresa4.jpg';
  if (id === 5) return '/imagens/empresa5.jpg';
  return '/imagens/empresa1.jpg';
};

function Empresas({ empresas, setEmpresas, vagas, favoritos, toggleFavorito, candidatarSe, candidaturas }) {
  // Inicializa selecionando a primeira empresa da lista
  const [selectedEmpresaId, setSelectedEmpresaId] = useState(empresas.length > 0 ? empresas[0].id : null);

  const empresaSelecionada = empresas.find(e => e.id === selectedEmpresaId) || empresas[0];

  // Filtra vagas publicadas por esta empresa
  const vagasPublicadas = empresaSelecionada
    ? vagas.filter(v => v.id_empresa === empresaSelecionada.id)
    : [];

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 0' }}>
      
      {/* Cabeçalho */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>Empresas Parceiras 🏢</h1>
        <p style={{ color: 'var(--text-muted)' }}>Explore as organizações que contratam talentos na Staggi e confira suas vagas ativas</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', alignItems: 'start' }}>
        
        {/* Coluna Esquerda - Lista de Empresas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Empresas ({empresas.length})
          </h3>
          
          {empresas.map(emp => {
            const isSelected = emp.id === selectedEmpresaId;
            const qtdVagas = vagas.filter(v => v.id_empresa === emp.id).length;

            return (
              <div 
                key={emp.id}
                onClick={() => setSelectedEmpresaId(emp.id)}
                style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '2px solid var(--primary)' : '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  transform: isSelected ? 'translateX(4px)' : 'none',
                  boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}
              >
                <div style={{
                  width: '45px',
                  height: '45px',
                  borderRadius: '8px',
                  background: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: 'var(--primary)'
                }}>
                  {emp.nome.charAt(0)}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '15px', fontWeight: 700 }}>{emp.nome}</h4>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>🏷️ {emp.setor}</span>
                </div>

                <span className="badge badge-purple" style={{ fontSize: '11px' }}>
                  {qtdVagas} {qtdVagas === 1 ? 'vaga' : 'vagas'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Coluna Direita - Detalhe da Empresa Selecionada */}
        {empresaSelecionada ? (
          <div style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-md)',
            overflow: 'hidden'
          }}>
            {/* Cover Banner com Imagem Dinâmica e Object-Fit */}
            <div style={{
              height: '160px',
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: '#f3f4f6'
            }}>
              <img 
                src={getEmpresaImagem(empresaSelecionada.id)}
                alt={`Fachada da empresa ${empresaSelecionada.nome}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            {/* Content Container */}
            <div style={{ padding: '30px', position: 'relative' }}>
              
              {/* Logo Flutuante */}
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '16px',
                background: 'white',
                border: '4px solid white',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'var(--primary)',
                position: 'absolute',
                top: '-40px',
                left: '30px'
              }}>
                {empresaSelecionada.nome.charAt(0)}
              </div>

              {/* Informações Principais */}
              <div style={{ marginTop: '35px', marginBottom: '24px' }}>
                <h2 style={{ margin: '0 0 6px 0', fontSize: '28px' }}>{empresaSelecionada.nome}</h2>
                <span className="badge badge-purple" style={{ fontSize: '13px' }}>🏷️ {empresaSelecionada.setor}</span>
              </div>

              {/* Grid de Detalhes Adicionais */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '15px',
                marginBottom: '30px',
                background: '#f9f9fb',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border)'
              }}>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>📍 Localização</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-dark)' }}>{empresaSelecionada.localizacao || 'Não especificada'}</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>🏢 Tamanho</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-dark)' }}>{empresaSelecionada.tamanho || 'Não especificado'}</strong>
                </div>
                <div>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>💼 Vagas Ativas</span>
                  <strong style={{ fontSize: '14px', color: 'var(--text-dark)' }}>{vagasPublicadas.length} oportunidade(s)</strong>
                </div>
              </div>

              {/* Seção de Vagas Publicadas */}
              <div>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', borderBottom: '2px solid var(--border)', paddingBottom: '8px' }}>
                  Vagas Publicadas 🔥
                </h3>

                <div className="recent-jobs" style={{ gap: '12px' }}>
                  {vagasPublicadas.length > 0 ? (
                    vagasPublicadas.map(vaga => {
                      const isFav = favoritos.includes(vaga.id);
                      const jaCandidatado = candidaturas.some(c => c.id_vaga === vaga.id && c.id_candidato === 1);

                      return (
                        <div 
                          key={vaga.id} 
                          className="job-card" 
                          style={{
                            padding: '16px',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)'
                          }}
                        >
                          <div className="job-details">
                            <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: 700 }}>{vaga.titulo}</h4>
                            <div className="job-meta" style={{ fontSize: '12px', marginBottom: '8px', gap: '12px' }}>
                              <span>📍 {vaga.localizacao || 'Brasil'}</span>
                              <span>💰 {vaga.bolsa || 'A combinar'}</span>
                            </div>
                            <div className="job-badges">
                              <span className="badge badge-purple" style={{ fontSize: '11px' }}>{vaga.tipo}</span>
                              <span className="badge badge-orange" style={{ fontSize: '11px' }}>{vaga.modalidade}</span>
                            </div>
                          </div>

                          <div className="job-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                            <button 
                              onClick={() => toggleFavorito(vaga.id)} 
                              style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', transition: '0.2s', padding: '4px' }}
                              title={isFav ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                            >
                              {isFav ? '❤️' : '🤍'}
                            </button>
                            {jaCandidatado ? (
                              <span className="badge badge-green" style={{ fontSize: '11px' }}>✓ Candidatado</span>
                            ) : (
                              <button 
                                onClick={() => candidatarSe(vaga.id)} 
                                className="btn-primary" 
                                style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }}
                              >
                                Candidatar-se
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div style={{
                      textAlign: 'center',
                      padding: '30px',
                      color: 'var(--text-muted)',
                      background: '#fcfcfd',
                      borderRadius: 'var(--radius-md)',
                      border: '1px dashed var(--border)'
                    }}>
                      Esta empresa ainda não possui nenhuma vaga de estágio publicada no momento. 🕒
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div style={{
            background: 'white',
            padding: '40px',
            textAlign: 'center',
            borderRadius: 'var(--radius-lg)',
            color: 'var(--text-muted)'
          }}>
            Selecione uma empresa para visualizar seus detalhes e vagas disponíveis.
          </div>
        )}

      </div>
    </div>
  );
}

export default Empresas;
