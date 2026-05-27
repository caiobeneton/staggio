import React, { useState } from 'react';

function Candidatos({ candidatos, setCandidatos }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [profissao, setProfissao] = useState('');
  
  // Controle de edição
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !profissao) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    if (editingId !== null) {
      // Alteração (Update)
      const candidatosAtualizados = candidatos.map(c => {
        if (c.id === editingId) {
          return { ...c, nome, email, profissao };
        }
        return c;
      });
      setCandidatos(candidatosAtualizados);
      setEditingId(null);
      alert('Cadastro de aluno atualizado com sucesso! 📝');
    } else {
      // Criação (Create)
      const maiorId = candidatos.length > 0 ? Math.max(...candidatos.map(c => c.id)) : 0;
      const novoCandidato = {
        id: maiorId + 1,
        nome,
        email,
        profissao
      };
      setCandidatos([...candidatos, novoCandidato]);
      alert('Aluno cadastrado com sucesso! 👥');
    }

    // Limpar campos
    setNome('');
    setEmail('');
    setProfissao('');
  };

  const handleEditar = (candidato) => {
    setEditingId(candidato.id);
    setNome(candidato.nome);
    setEmail(candidato.email);
    setProfissao(candidato.profissao);
  };

  const handleCancelarEdicao = () => {
    setEditingId(null);
    setNome('');
    setEmail('');
    setProfissao('');
  };

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja remover este aluno do sistema?')) {
      const candidatosFiltrados = candidatos.filter(c => c.id !== id);
      setCandidatos(candidatosFiltrados);
      alert('Aluno removido com sucesso!');
      
      // Se estava editando o excluído, cancela
      if (editingId === id) {
        handleCancelarEdicao();
      }
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 0' }}>
      
      {/* Cabeçalho */}
      <div style={{ marginBottom: '30px' }}>
        <h1 style={{ marginBottom: '8px' }}>Gerenciamento de Alunos 👥</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Tabela administrativa para criação, alteração e exclusão dos registros de estudantes do sistema Staggi
        </p>
      </div>

      {/* Formulário (Criação / Alteração) */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        marginBottom: '40px'
      }}>
        <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: 'var(--text-dark)' }}>
          {editingId !== null ? '✏️ Alterar Dados do Aluno' : '➕ Cadastrar Novo Aluno'}
        </h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', alignItems: 'end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Nome Completo</label>
            <input 
              type="text" 
              value={nome} 
              onChange={e => setNome(e.target.value)} 
              required
              placeholder="Ex: João da Silva"
              style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none', fontSize: '14px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>E-mail de Contato</label>
            <input 
              type="email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
              required
              placeholder="Ex: joao@email.com"
              style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none', fontSize: '14px' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px' }}>Profissão / Cargo</label>
            <input 
              type="text" 
              value={profissao} 
              onChange={e => setProfissao(e.target.value)} 
              required
              placeholder="Ex: Dev React"
              style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid #ddd', outline: 'none', fontSize: '14px' }}
            />
          </div>

          <div style={{ gridColumn: 'span 3', display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
            {editingId !== null && (
              <button 
                type="button" 
                onClick={handleCancelarEdicao}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '14px' }}
              >
                Cancelar Edição
              </button>
            )}
            <button 
              type="submit" 
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '14px' }}
            >
              {editingId !== null ? 'Salvar Alterações' : 'Cadastrar Aluno'}
            </button>
          </div>
        </form>
      </div>

      {/* Tabela Administrativa */}
      <div style={{
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden'
      }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)' }}>
          <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--text-dark)' }}>Tabela de Registros</h3>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#f8f9fb', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '14px 24px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '14px 24px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Nome</th>
              <th style={{ padding: '14px 24px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>E-mail</th>
              <th style={{ padding: '14px 24px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600 }}>Profissão</th>
              <th style={{ padding: '14px 24px', fontSize: '12px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, textAlign: 'right' }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {candidatos.length > 0 ? candidatos.map(c => {
              const isBeingEdited = c.id === editingId;
              return (
                <tr 
                  key={c.id} 
                  style={{ 
                    borderBottom: '1px solid var(--border)',
                    background: isBeingEdited ? '#faf5ff' : 'transparent',
                    transition: '0.15s'
                  }}
                >
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>#{c.id}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', fontWeight: 700 }}>{c.nome}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555' }}>{c.email}</td>
                  <td style={{ padding: '16px 24px', fontSize: '14px' }}>
                    <span className="badge badge-purple" style={{ fontSize: '12px' }}>{c.profissao}</span>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button 
                      onClick={() => handleEditar(c)}
                      className="btn-secondary"
                      style={{ padding: '6px 12px', fontSize: '12px', marginRight: '8px' }}
                      title="Editar Aluno"
                    >
                      ✏️ Editar
                    </button>
                    <button 
                      onClick={() => handleExcluir(c.id)}
                      style={{ 
                        background: 'none', 
                        border: 'none', 
                        color: '#ef4444', 
                        cursor: 'pointer', 
                        fontSize: '18px', 
                        padding: '6px',
                        verticalAlign: 'middle'
                      }}
                      title="Excluir Aluno"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              );
            }) : (
              <tr>
                <td colSpan="5" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                  Nenhum aluno cadastrado no sistema.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Candidatos;
