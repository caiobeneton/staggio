import React, { useState } from 'react';

function Candidatos({ candidatos, setCandidatos }) {
  const [novoNome, setNovoNome] = useState('');
  const [novoEmail, setNovoEmail] = useState('');
  const [novaProfissao, setNovaProfissao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoNome || !novoEmail || !novaProfissao) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    const maiorId = candidatos.length > 0 ? Math.max(...candidatos.map(c => c.id)) : 0;
    const novoCandidato = {
      id: maiorId + 1,
      nome: novoNome,
      email: novoEmail,
      profissao: novaProfissao
    };

    setCandidatos([...candidatos, novoCandidato]);
    alert('Candidato cadastrado com sucesso!');
    
    setNovoNome('');
    setNovoEmail('');
    setNovaProfissao('');
  };

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este candidato?')) {
      const candidatosFiltrados = candidatos.filter(c => c.id !== id);
      setCandidatos(candidatosFiltrados);
      alert('Candidato excluído com sucesso!');
    }
  };

  return (
    <div>
      <h1>Gerenciar Candidatos</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Adicionar Novo Candidato</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Nome: </label>
            <input type="text" value={novoNome} onChange={e => setNovoNome(e.target.value)} required style={{ marginLeft: '5px', padding: '3px' }}/>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>E-mail: </label>
            <input type="email" value={novoEmail} onChange={e => setNovoEmail(e.target.value)} required style={{ marginLeft: '5px', padding: '3px' }}/>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Profissão: </label>
            <input type="text" value={novaProfissao} onChange={e => setNovaProfissao(e.target.value)} required style={{ marginLeft: '5px', padding: '3px' }}/>
          </div>
          <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Cadastrar Candidato</button>
        </form>
      </div>

      <h2>Lista de Candidatos</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Profissão</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {candidatos.length > 0 ? candidatos.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome}</td>
              <td>{c.email}</td>
              <td>{c.profissao}</td>
              <td>
                <button onClick={() => handleExcluir(c.id)} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>Excluir</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="5" style={{ textAlign: 'center' }}>Nenhum candidato cadastrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Candidatos;
