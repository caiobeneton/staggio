import React, { useState } from 'react';

function Empresas({ empresas, setEmpresas }) {
  const [novoNome, setNovoNome] = useState('');
  const [novoSetor, setNovoSetor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!novoNome || !novoSetor) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    const maiorId = empresas.length > 0 ? Math.max(...empresas.map(e => e.id)) : 0;
    const novaEmpresa = {
      id: maiorId + 1,
      nome: novoNome,
      setor: novoSetor,
      logo: "/imagens/default.png" // placeholder genérico
    };

    setEmpresas([...empresas, novaEmpresa]);
    alert('Empresa cadastrada com sucesso!');
    
    setNovoNome('');
    setNovoSetor('');
  };

  const handleExcluir = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta empresa? (Isso não exclui as vagas relacionadas)')) {
      const empresasFiltradas = empresas.filter(emp => emp.id !== id);
      setEmpresas(empresasFiltradas);
      alert('Empresa excluída com sucesso!');
    }
  };

  return (
    <div>
      <h1>Gerenciar Empresas</h1>
      
      <div style={{ marginBottom: '30px', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
        <h2>Adicionar Nova Empresa</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Nome: </label>
            <input type="text" value={novoNome} onChange={e => setNovoNome(e.target.value)} required style={{ marginLeft: '5px', padding: '3px' }}/>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Setor: </label>
            <input type="text" value={novoSetor} onChange={e => setNovoSetor(e.target.value)} required style={{ marginLeft: '5px', padding: '3px' }}/>
          </div>
          <button type="submit" style={{ padding: '5px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Cadastrar Empresa</button>
        </form>
      </div>

      <h2>Lista de Empresas</h2>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Setor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {empresas.length > 0 ? empresas.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.nome}</td>
              <td>{emp.setor}</td>
              <td>
                <button onClick={() => handleExcluir(emp.id)} style={{ backgroundColor: '#dc3545', color: '#fff', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '3px' }}>Excluir</button>
              </td>
            </tr>
          )) : (
            <tr><td colSpan="4" style={{ textAlign: 'center' }}>Nenhuma empresa cadastrada.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Empresas;
