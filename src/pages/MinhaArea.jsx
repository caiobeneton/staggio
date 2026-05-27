import React, { useState } from 'react';

function MinhaArea({ candidatos, setCandidatos, candidaturas, cancelarCandidatura, vagas, empresas, favoritos, toggleFavorito }) {
  const [activeTab, setActiveTab] = useState('favoritos');
  const [isEditing, setIsEditing] = useState(false);

  // Encontra o candidato ativo (João Silva - ID 1)
  const candidatoAtivo = candidatos.find(c => c.id === 1) || {
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
    profissao: 'Desenvolvedor em formação',
    bio: 'Estudante de Engenharia de Software apaixonado por tecnologia e interfaces interativas.',
    skills: 'React, JavaScript, HTML, CSS, Git'
  };

  // Estados locais para edição de perfil
  const [editNome, setEditNome] = useState(candidatoAtivo.nome);
  const [editEmail, setEditEmail] = useState(candidatoAtivo.email);
  const [editProfissao, setEditProfissao] = useState(candidatoAtivo.profissao);
  const [editBio, setEditBio] = useState(candidatoAtivo.bio || 'Estudante de Engenharia de Software apaixonado por tecnologia.');
  const [editSkills, setEditSkills] = useState(candidatoAtivo.skills || 'React, JavaScript, CSS');

  const handleSalvarPerfil = (e) => {
    e.preventDefault();
    const candidatosAtualizados = candidatos.map(c => {
      if (c.id === candidatoAtivo.id) {
        return {
          ...c,
          nome: editNome,
          email: editEmail,
          profissao: editProfissao,
          bio: editBio,
          skills: editSkills
        };
      }
      return c;
    });

    // Se o candidato ativo não estava na lista por algum motivo, adiciona-o
    if (!candidatos.some(c => c.id === candidatoAtivo.id)) {
      candidatosAtualizados.push({
        id: candidatoAtivo.id,
        nome: editNome,
        email: editEmail,
        profissao: editProfissao,
        bio: editBio,
        skills: editSkills
      });
    }

    setCandidatos(candidatosAtualizados);
    setIsEditing(false);
    alert('Perfil atualizado com sucesso! 🎉');
  };

  // Filtra as candidaturas do candidato ativo
  const minhasCandidaturas = candidaturas.filter(c => c.id_candidato === candidatoAtivo.id);

  // Filtra as vagas favoritadas
  const vagasFavoritas = vagas.filter(v => favoritos.includes(v.id));

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px 0' }}>
      
      {/* Cabeçalho */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>Minha Área ⭐</h1>
        <p style={{ color: 'var(--text-muted)' }}>Gerencie suas informações de perfil, candidaturas e vagas favoritadas</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', alignItems: 'start' }}>
        
        {/* Lado Esquerdo - Perfil Pessoal */}
        <div style={{ background: 'white', padding: '24px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', marginBottom: '12px', fontWeight: 'bold' }}>
              {candidatoAtivo.nome.charAt(0)}
            </div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '20px' }}>{candidatoAtivo.nome}</h3>
            <p style={{ margin: 0, color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>{candidatoAtivo.profissao}</p>
          </div>

          {!isEditing ? (
            <div>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '15px 0' }} />
              
              <div style={{ marginBottom: '12px' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>E-mail</span>
                <span style={{ fontSize: '14px' }}>{candidatoAtivo.email}</span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Sobre Mim</span>
                <p style={{ fontSize: '13px', margin: '4px 0 0 0', lineHeight: 1.4, color: '#555' }}>
                  {candidatoAtivo.bio || 'Nenhuma biografia adicionada ainda.'}
                </p>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Competências</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '6px' }}>
                  {(candidatoAtivo.skills || 'React, JS, HTML').split(',').map((skill, index) => (
                    <span key={index} className="badge badge-gray" style={{ fontSize: '11px', padding: '3px 8px' }}>
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setIsEditing(true)} 
                className="btn-secondary" 
                style={{ width: '100%', padding: '10px' }}
              >
                ✏️ Editar Perfil
              </button>
            </div>
          ) : (
            <form onSubmit={handleSalvarPerfil}>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '15px 0' }} />
              
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Nome</label>
                <input 
                  type="text" 
                  value={editNome} 
                  onChange={e => setEditNome(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>E-mail</label>
                <input 
                  type="email" 
                  value={editEmail} 
                  onChange={e => setEditEmail(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Profissão/Objetivo</label>
                <input 
                  type="text" 
                  value={editProfissao} 
                  onChange={e => setEditProfissao(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none' }}
                />
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Sobre Mim (Bio)</label>
                <textarea 
                  value={editBio} 
                  onChange={e => setEditBio(e.target.value)} 
                  rows="3" 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none', resize: 'vertical', fontFamily: 'inherit', fontSize: '13px' }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Competências (separadas por vírgula)</label>
                <input 
                  type="text" 
                  value={editSkills} 
                  onChange={e => setEditSkills(e.target.value)} 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none' }}
                  placeholder="Ex: React, CSS, Git"
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  type="button" 
                  onClick={() => setIsEditing(false)} 
                  className="btn-secondary" 
                  style={{ flex: 1, padding: '8px 0' }}
                >
                  Cancelar
                </button>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ flex: 1, padding: '8px 0', fontSize: '14px' }}
                >
                  Salvar
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Lado Direito - Estatísticas & Abas */}
        <div>
          {/* Widgets de Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)', padding: '20px', borderRadius: 'var(--radius-lg)', color: 'white', boxShadow: 'var(--shadow-md)' }}>
              <h2 style={{ fontSize: '32px', margin: '0 0 4px 0' }}>{vagasFavoritas.length}</h2>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '14px', fontWeight: 500 }}>Vagas Favoritas ❤️</p>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #fb923c, #c2410c)', padding: '20px', borderRadius: 'var(--radius-lg)', color: 'white', boxShadow: 'var(--shadow-md)' }}>
              <h2 style={{ fontSize: '32px', margin: '0 0 4px 0' }}>{minhasCandidaturas.length}</h2>
              <p style={{ margin: 0, opacity: 0.9, fontSize: '14px', fontWeight: 500 }}>Candidaturas Enviadas 💼</p>
            </div>
          </div>

          {/* Abas */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', background: 'white', padding: '6px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
            <button 
              onClick={() => setActiveTab('favoritos')}
              style={{ flex: 1, padding: '12px', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer', transition: '0.2s', background: activeTab === 'favoritos' ? 'linear-gradient(90deg, var(--primary), var(--secondary))' : 'transparent', color: activeTab === 'favoritos' ? 'white' : 'var(--text-muted)' }}
            >
              ❤️ Favoritos ({vagasFavoritas.length})
            </button>
            <button 
              onClick={() => setActiveTab('candidaturas')}
              style={{ flex: 1, padding: '12px', border: 'none', borderRadius: 'var(--radius-sm)', fontWeight: 600, cursor: 'pointer', transition: '0.2s', background: activeTab === 'candidaturas' ? 'linear-gradient(90deg, var(--primary), var(--secondary))' : 'transparent', color: activeTab === 'candidaturas' ? 'white' : 'var(--text-muted)' }}
            >
              💼 Minhas Candidaturas ({minhasCandidaturas.length})
            </button>
          </div>

          {/* Conteúdo das Abas */}
          {activeTab === 'favoritos' ? (
            <div className="recent-jobs">
              {vagasFavoritas.length > 0 ? (
                vagasFavoritas.map(vaga => {
                  const empresa = empresas.find(e => e.id === vaga.id_empresa);
                  const empresaNome = empresa ? empresa.nome : 'Empresa parceira';
                  const jaCandidatado = candidaturas.some(c => c.id_vaga === vaga.id && c.id_candidato === candidatoAtivo.id);

                  return (
                    <div key={vaga.id} className="job-card" style={{ padding: '16px 20px' }}>
                      <div className="job-icon" style={{ width: '40px', height: '40px', fontSize: '20px' }}>🏢</div>
                      <div className="job-details">
                        <h3 className="job-title" style={{ fontSize: '16px' }}>{vaga.titulo}</h3>
                        <p className="job-company" style={{ fontSize: '13px', marginBottom: '8px' }}>{empresaNome}</p>
                        <div className="job-badges">
                          <span className="badge badge-purple">{vaga.tipo || 'Estágio'}</span>
                          <span className="badge badge-orange">{vaga.modalidade || 'Remoto'}</span>
                        </div>
                      </div>
                      
                      <div className="job-actions" style={{ gap: '12px' }}>
                        {jaCandidatado && (
                          <span className="badge badge-green" style={{ fontSize: '11px' }}>✓ Inscrito</span>
                        )}
                        <button 
                          onClick={() => {
                            // Para candidatar-se direto dos favoritos!
                            // Se o app tiver candidatarSe na prop, a chamamos. Vamos usar um truque: 
                            // como passamos candidaturas, podemos disparar uma simulação! Mas para garantir robustez técnica,
                            // podemos apenas desfavoritar ou ir para detalhes.
                            // Vamos adicionar um botão de desfavoritar super visível:
                            toggleFavorito(vaga.id);
                          }}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px', fontSize: '18px' }}
                          title="Remover dos Favoritos"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  Você ainda não adicionou nenhuma vaga aos favoritos. ❤️
                </div>
              )}
            </div>
          ) : (
            <div className="recent-jobs">
              {minhasCandidaturas.length > 0 ? (
                minhasCandidaturas.map(c => {
                  const vaga = vagas.find(v => v.id === c.id_vaga);
                  if (!vaga) return null;
                  
                  const empresa = empresas.find(e => e.id === vaga.id_empresa);
                  const empresaNome = empresa ? empresa.nome : 'Empresa parceira';

                  return (
                    <div key={c.id} className="job-card" style={{ padding: '16px 20px' }}>
                      <div className="job-icon" style={{ width: '40px', height: '40px', fontSize: '20px' }}>💼</div>
                      <div className="job-details">
                        <h3 className="job-title" style={{ fontSize: '16px' }}>{vaga.titulo}</h3>
                        <p className="job-company" style={{ fontSize: '13px', marginBottom: '8px' }}>{empresaNome}</p>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <span className="badge badge-green" style={{ fontSize: '11px' }}>✓ Candidatado</span>
                          <span className="badge badge-purple" style={{ fontSize: '11px' }}>{vaga.tipo}</span>
                        </div>
                      </div>
                      
                      <div className="job-actions">
                        <button 
                          onClick={() => cancelarCandidatura(c.id)}
                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '8px', fontSize: '13px', fontWeight: 600 }}
                          title="Cancelar Candidatura"
                        >
                          Cancelar ❌
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', background: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                  Você ainda não se candidatou a nenhuma vaga. 💼
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MinhaArea;
